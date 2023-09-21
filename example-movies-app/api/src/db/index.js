// Importo el módulo 'Pool' de 'pg', que me permite conectarme y trabajar con la base de datos PostgreSQL
const { Pool } = require("pg");
require("dotenv").config();

// Creo una instancia de 'Pool' que contiene la configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER, // Usuario de la base de datos
  host: process.env.DB_HOST, // Dirección de la base de datos; cámbiala si es necesario
  database: process.env.DB_DATABASE, // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña de la base de datos
  port: process.env.DB_PORT, // Puerto por defecto de PostgreSQL
});

// Esta función se encarga de inicializar la base de datos y crear la tabla 'peliculas' si no existe
async function inicializarBaseDeDatos() {
  try {
    // Ejecuto una consulta SQL para crear la tabla 'peliculas' si aún no existe
    await pool.query(`
    CREATE TABLE IF NOT EXISTS peliculas (
      peliculaid SERIAL PRIMARY KEY, -- Campo autoincremental que sirve como clave primaria
      titulo VARCHAR(255) NOT NULL, -- Campo para el título de la película, que no puede ser nulo
      ano_estreno INTEGER NOT NULL, -- Campo para el año de estreno, que no puede ser nulo
      duracion INTEGER NOT NULL, -- Campo para la duración en minutos, que no puede ser nulo
      sinopsis TEXT, -- Campo para la sinopsis de la película
      clasificacion VARCHAR(50) -- Campo para la clasificación de la película
    );
  `);

    // Consulta para contar el número de registros en la tabla de películas
    const countQuery = "SELECT COUNT(*) FROM peliculas";
    const { rows } = await pool.query(countQuery);
    const rowCount = parseInt(rows[0].count);

    if (rowCount === 0) {
      // Solo si no hay registros, realizo la inserción de datos iniciales
      await pool.query(`
        INSERT INTO peliculas (titulo, ano_estreno, duracion, sinopsis, clasificacion)
        VALUES
          ('Avatar', 2009, 162, 'Una película de ciencia ficción dirigida por James Cameron.', 'PG-13'),
          ('Pulp Fiction', 1994, 154, 'Una película de Quentin Tarantino con una narrativa no lineal.', 'R'),
          ('El Señor de los Anillos: La Comunidad del Anillo', 2001, 178, 'La primera entrega de la trilogía basada en la obra de J.R.R. Tolkien.', 'PG-13'),
          ('La La Land', 2016, 128, 'Un musical romántico ambientado en Los Ángeles.', 'PG-13'),
          ('Matrix', 1999, 136, 'Una película de ciencia ficción que desafía la realidad.', 'R'),
          ('Blade Runner', 1982, 117, 'Una película de ciencia ficción ambientada en un futuro distópico donde los humanos cazan a androides rebeldes llamados "replicantes."', 'R'),
          ('Jurassic Park', 1993, 127, 'Un parque temático de dinosaurios se convierte en un caos cuando los dinosaurios escapan y comienzan a causar estragos.', 'PG-13'),
          ('Forrest Gump', 1994, 142, 'La historia de un hombre con un coeficiente intelectual bajo que vive una vida extraordinaria a lo largo de décadas.', 'PG-13'),
          ('Inception', 2010, 148, 'Un ladrón especializado en robar secretos a través de los sueños es contratado para realizar una tarea casi imposible: plantar una idea en la mente de una persona.', 'PG-13'),
          ('The Shawshank Redemption', 1994, 142, 'La historia de un hombre condenado injustamente a cadena perpetua que busca su libertad y redención.', 'R');
      `);

      console.log(
        "Datos iniciales de películas insertados en la base de datos."
      );
    } else {
      console.log(
        "Los datos de películas ya existen en la base de datos, no se realizaron inserciones adicionales."
      );
    }

    console.log("Base de datos inicializada con éxito");
  } catch (error) {
    // En caso de que ocurra un error, lo registro en la consola
    console.error("Error al inicializar la base de datos", error);
  }
}

// Exporto la instancia 'pool' y la función 'inicializarBaseDeDatos' para que estén disponibles en otros archivos
module.exports = {
  pool,
  inicializarBaseDeDatos,
};
