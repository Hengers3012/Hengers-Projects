const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes");
const { inicializarBaseDeDatos } = require("./src/db/index");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Configurar CORS para permitir solicitudes desde http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", // Debes ajustar esto al origen de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Rutas para películas
app.use("/", routes);

// Inicializar la base de datos
inicializarBaseDeDatos().then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
});
