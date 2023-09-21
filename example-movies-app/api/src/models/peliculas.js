// src/models/peliculas.js
const { pool } = require("../db/index");

async function obtenerTodas() {
  const query = "SELECT * FROM peliculas";
  const { rows } = await pool.query(query);
  return rows;
}

async function agregar(pelicula) {
  const { titulo, ano_estreno, duracion, sinopsis, clasificacion } = pelicula;
  const query = `
    INSERT INTO peliculas (titulo, ano_estreno, duracion, sinopsis, clasificacion)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const values = [titulo, ano_estreno, duracion, sinopsis, clasificacion];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = {
  obtenerTodas,
  agregar,
};
