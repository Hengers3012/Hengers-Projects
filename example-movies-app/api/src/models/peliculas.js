// Importo la instancia de la base de datos PostgreSQL desde db/index.js
const { pool } = require("../db/index");

// Defino una función asincrónica para obtener todas las películas de la base de datos
async function obtenerTodas() {
  const query = "SELECT * FROM peliculas"; // Creo una consulta SQL para seleccionar todas las películas
  const { rows } = await pool.query(query); // Ejecuto la consulta utilizando la instancia de la base de datos
  return rows; // Devuelvo las filas resultantes como un array de películas
}

// Defino una función asincrónica para agregar una nueva película a la base de datos
async function agregar(pelicula) {
  const { titulo, ano_estreno, duracion, sinopsis, clasificacion } = pelicula; // Desestructuro los datos de la película
  const query = `
    INSERT INTO peliculas (titulo, ano_estreno, duracion, sinopsis, clasificacion)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `; // Creo una consulta SQL parametrizada para insertar una película
  const values = [titulo, ano_estreno, duracion, sinopsis, clasificacion]; // Creo un array de valores para los parámetros de la consulta
  const { rows } = await pool.query(query, values); // Ejecuto la consulta con los valores proporcionados
  return rows[0]; // Devuelvo la fila recién insertada, que representa la nueva película
}

module.exports = {
  obtenerTodas,
  agregar,
};
