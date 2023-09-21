import React from "react"; // Importo la biblioteca React para crear componentes.
import { createRoot } from "react-dom/client"; // Utilizo createRoot de ReactDOM para renderizar mi aplicación de React.
import Movies_App from "./components/Movies_App"; // Importo mi componente principal Movies_App desde su ubicación en el proyecto.

// Creo un punto de entrada en el DOM, generalmente un div con el ID "root", donde se renderizará mi aplicación React.
const root = createRoot(document.getElementById("root"));

// Utilizo el método render de mi punto de entrada para renderizar mi componente principal Movies_App.
// React.StrictMode es un componente que ayuda a detectar posibles problemas en la aplicación durante el desarrollo.
// Lo uso aquí para asegurarme de que mi aplicación siga las mejores prácticas y advertencias de React.
root.render(
  <React.StrictMode>
    <Movies_App />
  </React.StrictMode>
);
