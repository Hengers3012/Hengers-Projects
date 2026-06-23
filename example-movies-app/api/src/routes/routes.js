// Importar el módulo 'express' para crear rutas
const express = require("express");
const router = express.Router(); // Crear un objeto de enrutador Express

// Importar los controladores necesarios para manejar las solicitudes HTTP
const peliculasController = require("../controller/peliculasController");

// Definir las rutas para la gestión de películas
router.get("/peliculas", peliculasController.obtenerTodasLasPeliculas);
// Establecer una ruta para obtener todas las películas, utilizando el controlador 'obtenerTodasLasPeliculas'

router.post("/peliculas", peliculasController.agregarPelicula);
// Establecer una ruta para agregar una nueva película, utilizando el controlador 'agregarPelicula'
// Puedes agregar más rutas según sea necesario para otras operaciones (actualización, eliminación, etc.)

module.exports = router; // Exportar el objeto de enrutador para su uso en la aplicación principal
