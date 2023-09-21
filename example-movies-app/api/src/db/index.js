// src/db/index.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost", // Cambia esto a la dirección de tu base de datos PostgreSQL si es necesario
  database: "movies_example",
  password: "30Heng12",
  port: 5432, // Puerto por defecto de PostgreSQL
});

async function inicializarBaseDeDatos() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS peliculas (
        peliculaid SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        ano_estreno INTEGER NOT NULL,
        duracion INTEGER NOT NULL,
        sinopsis TEXT,
        clasificacion VARCHAR(50)
      );
    `);
    // Consulta para contar el número de registros en la tabla de películas
    const countQuery = "SELECT COUNT(*) FROM peliculas";
    const { rows } = await pool.query(countQuery);
    const rowCount = parseInt(rows[0].count);

    if (rowCount === 0) {
      // Solo si no hay registros, realiza la inserción de datos iniciales
      await pool.query(`
    INSERT INTO peliculas (titulo, ano_estreno, duracion, sinopsis, clasificacion)
    VALUES
      ('Avatar', 2009, 162, 'Una película de ciencia ficción dirigida por James Cameron.', 'PG-13'),
      ('Pulp Fiction', 1994, 154, 'Una película de Quentin Tarantino con una narrativa no lineal.', 'R'),
      ('El Señor de los Anillos: La Comunidad del Anillo', 2001, 178, 'La primera entrega de la trilogía basada en la obra de J.R.R. Tolkien.', 'PG-13'),
      ('La La Land', 2016, 128, 'Un musical romántico ambientado en Los Ángeles.', 'PG-13'),
      ('Matrix', 1999, 136, 'Una película de ciencia ficción que desafía la realidad.', 'R');
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
    console.error("Error al inicializar la base de datos", error);
  }
}

module.exports = {
  pool,
  inicializarBaseDeDatos,
};
