// routes.js
const express = require("express");
const router = express.Router();

// Importa los controladores necesarios
const peliculasController = require("../controller/peliculasController");

// Define las rutas
router.get("/peliculas", peliculasController.obtenerTodasLasPeliculas);
router.post("/peliculas", peliculasController.agregarPelicula);
// Agrega más rutas según sea necesario

module.exports = router;
