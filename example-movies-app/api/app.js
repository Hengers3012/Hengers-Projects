// Importar las bibliotecas y módulos necesarios
const express = require("express"); // Express es un framework de Node.js para crear aplicaciones web
const bodyParser = require("body-parser"); // body-parser facilita la lectura de datos del cuerpo de las solicitudes HTTP
const routes = require("./src/routes/routes"); // Importar las rutas de la aplicación
const { inicializarBaseDeDatos } = require("./src/db/index"); // Importar la función de inicialización de la base de datos
const cors = require("cors"); // CORS es un middleware para gestionar solicitudes de dominios cruzados

const app = express(); // Crear una instancia de la aplicación Express
const port = 3001; // Puerto en el que se ejecutará el servidor web

app.use(bodyParser.json()); // Configurar Express para analizar el cuerpo de las solicitudes en formato JSON

// Configurar CORS para permitir solicitudes desde http://localhost:3000 (el frontend)
app.use(
  cors({
    origin: "http://localhost:3000", // Debes ajustar esto al origen de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
    credentials: true, // Habilitar el intercambio de cookies y credenciales de autenticación
  })
);

// Definir las rutas para las operaciones relacionadas con películas
app.use("/", routes);

// Inicializar la base de datos antes de iniciar el servidor web
inicializarBaseDeDatos().then(() => {
  // Iniciar el servidor web en el puerto especificado
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
});
