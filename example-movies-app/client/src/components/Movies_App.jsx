// Importo las dependencias necesarias para mi componente React
import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios se utiliza para hacer solicitudes HTTP
import "./styles.css"; // Estilos CSS para mi aplicación

// Función principal de mi componente Movies_App
const Movies_App = () => {
  // Utilizo el estado para almacenar los datos de las películas
  const [movies, setMovies] = useState([]);

  // Imprimo en la consola el estado de las películas (útil para depuración)
  console.log(movies);

  // Utilizo un efecto para cargar los datos de las películas desde el servidor
  useEffect(() => {
    axios
      .get("http://localhost:3001/peliculas") // Hago una solicitud GET al servidor
      .then((response) => {
        // Utilizo response.data para obtener el array del JSON y actualizo el estado de las películas
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error); // Manejo de errores si la solicitud falla
      });
  }, []);

  //Ejemplo:
  // Datos entregados por la API (comentario informativo)
  // ano_estreno: 2009;
  // clasificacion: "PG-13";
  // duracion: 162;
  // peliculaid: 1;
  // sinopsis: "Una película de ciencia ficción dirigida por James Cameron.";
  // titulo: "Avatar";

  // Renderizo la interfaz de usuario
  return (
    <div className="container">
      <h1>MOVIES APP</h1>
      <table className="tabla">
        <thead>
          <tr className="encabezado">
            <th>ID</th>
            <th>TITULO</th>
            <th>SIPNOSIS</th>
            <th>CLASIFICACION</th>
            <th>DURACION</th>
            <th>ESTRENO</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            // Mapeo cada película y genero una fila en la tabla
            <tr className="contenido" key={movie?.peliculaid}>
              <td>{movie?.peliculaid}</td>
              <td>{movie?.titulo}</td>
              <td>{movie?.sinopsis}</td>
              <td>{movie?.clasificacion}</td>
              <td>{movie?.duracion} min</td>
              <td>{movie?.ano_estreno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies_App; // Exporto mi componente para su uso en otras partes de la aplicación
