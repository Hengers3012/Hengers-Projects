const Pelicula = require("../models/peliculas");

async function obtenerTodasLasPeliculas(req, res) {
  console.log("Obteniendo todas las peliculas");

  try {
    const peliculas = await Pelicula.obtenerTodas();
    res.json(peliculas);
  } catch (error) {
    console.error("Error al obtener las películas", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function agregarPelicula(req, res) {
  const nuevaPelicula = req.body;
  try {
    const pelicula = await Pelicula.agregar(nuevaPelicula);
    res.json(pelicula);
  } catch (error) {
    console.error("Error al agregar la película", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  obtenerTodasLasPeliculas,
  agregarPelicula,
};
