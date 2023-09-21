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
          ('La La Land', 2016, 128, 'Un musical romántico ambientado en Los Ángeles.', 'PG-13'),
          ('Matrix', 1999, 136, 'Una película de ciencia ficción que desafía la realidad.', 'R'),
          ('Blade Runner', 1982, 117, 'Una película de ciencia ficción ambientada en un futuro distópico donde los humanos cazan a androides rebeldes llamados "replicantes."', 'R'),
          ('Jurassic Park', 1993, 127, 'Un parque temático de dinosaurios se convierte en un caos cuando los dinosaurios escapan y comienzan a causar estragos.', 'PG-13'),
          ('Forrest Gump', 1994, 142, 'La historia de un hombre con un coeficiente intelectual bajo que vive una vida extraordinaria a lo largo de décadas.', 'PG-13'),
          ('Inception', 2010, 148, 'Un ladrón especializado en robar secretos a través de los sueños es contratado para realizar una tarea casi imposible: plantar una idea en la mente de una persona.', 'PG-13'),
          ('The Shawshank Redemption', 1994, 142, 'La historia de un hombre condenado injustamente a cadena perpetua que busca su libertad y redención.', 'R'),
          ('The Dark Knight', 2008, 152, 'Batman se enfrenta al Joker, un villano que amenaza la ciudad de Gotham con el caos y la destrucción.', 'PG-13'),
          ('Schindler s List', 1993, 195, 'La historia real de Oskar Schindler, un empresario que salvó a cientos de judíos durante el Holocausto.', 'R'),
          ('Forrest Gump', 1994, 142, 'La vida de Forrest Gump, un hombre con coeficiente intelectual bajo, que influyó en eventos históricos importantes.', 'PG-13'),
          ('Inception', 2010, 148, 'Un ladrón especializado en robar secretos a través de los sueños es contratado para plantar una idea en la mente de una persona.', 'PG-13'),
          ('The Matrix', 1999, 136, 'Neo descubre que vive en un mundo simulado y se une a una rebelión contra las máquinas que lo controlan.', 'R'),
          ('Fight Club', 1999, 139, 'Un hombre descontento forma un club secreto donde los hombres pueden liberar su agresión y rebelarse contra la sociedad.', 'R'),
          ('The Shawshank Redemption', 1994, 142, 'La historia de un hombre condenado injustamente a cadena perpetua que busca su libertad y redención.', 'R'),
          ('Pulp Fiction', 1994, 154, 'Varias historias interconectadas sobre crimen, redención y violencia en Los Ángeles.', 'R'),
          ('Goodfellas', 1990, 146, 'La vida de un hombre que se convierte en un mafioso y se involucra en el mundo del crimen organizado.', 'R'),
          ('The Lord of the Rings: The Fellowship of the Ring', 2001, 178, 'La primera entrega de la trilogía basada en la obra de J.R.R. Tolkien.', 'PG-13'),
          ('The Lord of the Rings: The Two Towers', 2002, 179, 'La continuación de la epopeya en la Tierra Media para destruir el Anillo Único.', 'PG-13'),
          ('The Lord of the Rings: The Return of the King', 2003, 201, 'La batalla final por la Tierra Media y el destino del Anillo Único.', 'PG-13'),
          ('The Silence of the Lambs', 1991, 118, 'Una agente del FBI busca la ayuda de Hannibal Lecter, un brillante pero peligroso asesino en serie, para atrapar a otro asesino.', 'R'),
          ('Gladiator', 2000, 155, 'Un general romano busca vengarse de aquellos que traicionaron a su familia y lo condenaron a la esclavitud.', 'R'),
          ('The Departed', 2006, 151, 'Un infiltrado de la policía y un espía de la mafia se enfrentan en un peligroso juego del gato y el ratón.', 'R'),
          ('Schindler s List', 1993, 195, 'La historia real de Oskar Schindler, un empresario que salvó a cientos de judíos durante el Holocausto.', 'R'),
          ('The Lion King', 1994, 88, 'La historia de Simba, un león que debe reclamar su lugar como rey de la Sabana después de ser exiliado.', 'G'),
          ('Saving Private Ryan', 1998, 169, 'Un grupo de soldados estadounidenses busca rescatar al soldado James Francis Ryan en medio de la Segunda Guerra Mundial.', 'R'),
          ('Titanic', 1997, 195, 'La tragedia del hundimiento del RMS Titanic y la historia de amor entre Jack y Rose.', 'PG-13'),
          ('The Green Mile', 1999, 189, 'La historia de un guardia de prisión que se enfrenta a eventos sobrenaturales y a un prisionero con dones extraordinarios.', 'R'),
          ('The Godfather: Part II', 1974, 202, 'La continuación de la saga de la familia Corleone, explorando su pasado y presente.', 'R'),
          ('Inglourious Basterds', 2009, 153, 'Durante la Segunda Guerra Mundial, un grupo de soldados judíos estadounidenses planea asesinar a altos mandos nazis.', 'R'),
          ('The Matrix Reloaded', 2003, 138, 'Neo lucha contra las máquinas mientras descubre la verdad detrás de la Matrix.', 'R'),
          ('The Matrix Revolutions', 2003, 129, 'La batalla final entre Neo y las máquinas que controlan la realidad.', 'R'),
          ('The Pianist', 2002, 150, 'La historia real de Władysław Szpilman, un pianista judío polaco que sobrevivió al Holocausto.', 'R'),
          ('The Prestige', 2006, 130, 'La rivalidad entre dos magos obsesionados con superarse mutuamente en sus trucos de magia.', 'PG-13'),
          ('The Social Network', 2010, 120, 'La historia de la creación de Facebook y la disputa legal que surgió entre sus fundadores.', 'PG-13'),
          ('The Revenant', 2015, 156, 'Un hombre herido y abandonado en el desierto lucha por sobrevivir y vengarse de quienes lo traicionaron.', 'R'),
          ('The Dark Knight Rises', 2012, 164, 'Batman debe enfrentarse a Bane, un poderoso villano que amenaza a Gotham City.', 'PG-13'),
          ('The Wolf of Wall Street', 2013, 180, 'La vida de Jordan Belfort, un corredor de bolsa que se involucra en actividades ilegales y excesos.', 'R'),
          ('The Godfather: Part III', 1990, 162, 'La continuación de la saga de la familia Corleone mientras enfrenta desafíos y conflictos internos.', 'R'),
          ('The Truman Show', 1998, 103, 'La vida de Truman Burbank, un hombre cuya vida es un programa de televisión de realidad sin que él lo sepa.', 'PG'),
          ('Forrest Gump', 1994, 142, 'La historia de un hombre con coeficiente intelectual bajo que vive una vida extraordinaria a lo largo de décadas.', 'PG-13'),
          ('Gladiator', 2000, 155, 'Un general romano busca vengarse de aquellos que traicionaron a su familia y lo condenaron a la esclavitud.', 'R'),
          ('The Departed', 2006, 151, 'Un infiltrado de la policía y un espía de la mafia se enfrentan en un peligroso juego del gato y el ratón.', 'R'),
          ('Schindler s List', 1993, 195, 'La historia real de Oskar Schindler, un empresario que salvó a cientos de judíos durante el Holocausto.', 'R'),
          ('The Lion King', 1994, 88, 'La historia de Simba, un león que debe reclamar su lugar como rey de la Sabana después de ser exiliado.', 'G'),
          ('Saving Private Ryan', 1998, 169, 'Un grupo de soldados estadounidenses busca rescatar al soldado James Francis Ryan en medio de la Segunda Guerra Mundial.', 'R'),
          ('The Green Mile', 1999, 189, 'La historia de un guardia de prisión que se enfrenta a eventos sobrenaturales y a un prisionero con dones extraordinarios.', 'R'),
          ('Inglourious Basterds', 2009, 153, 'Durante la Segunda Guerra Mundial, un grupo de soldados judíos estadounidenses planea asesinar a altos mandos nazis.', 'R');
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
