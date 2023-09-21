// Importo el modelo de Película que he creado en la carpeta 'models'
const Pelicula = require("../models/peliculas");

// Esta función se encarga de obtener todas las películas
async function obtenerTodasLasPeliculas(req, res) {
  console.log("Obteniendo todas las películas"); // Imprimo un mensaje en la consola

  try {
    // Intento obtener todas las películas utilizando el modelo 'Pelicula'
    const peliculas = await Pelicula.obtenerTodas();

    // Respondo con las películas obtenidas en formato JSON
    res.json(peliculas);
  } catch (error) {
    // En caso de que ocurra un error:

    console.error("Error al obtener las películas", error); // Imprimo un mensaje de error en la consola
    res.status(500).json({ error: "Error interno del servidor" }); // Respondo con un mensaje de error al cliente
  }
}

// Esta función se encarga de agregar una nueva película
async function agregarPelicula(req, res) {
  // Obtengo los datos de la nueva película desde la solicitud del cliente
  const nuevaPelicula = req.body;

  try {
    // Intento agregar la nueva película utilizando el modelo 'Pelicula'
    const pelicula = await Pelicula.agregar(nuevaPelicula);

    // Respondo con la película recién agregada en formato JSON
    res.json(pelicula);
  } catch (error) {
    // En caso de que ocurra un error:

    console.error("Error al agregar la película", error); // Imprimo un mensaje de error en la consola
    res.status(500).json({ error: "Error interno del servidor" }); // Respondo con un mensaje de error al cliente
  }
}

// Exporto las funciones 'obtenerTodasLasPeliculas' y 'agregarPelicula' para que estén disponibles en otros archivos
module.exports = {
  obtenerTodasLasPeliculas,
  agregarPelicula,
};
