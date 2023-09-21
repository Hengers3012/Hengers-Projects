import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

const Movies_App = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    axios
      .get("http://localhost:3001/peliculas") // Asegúrate de que la URL coincida con tu servidor backend
      .then((response) => {
        // Utiliza response.data para obtener el array del JSON
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  // Datos entregados por la API

  // ano_estreno: 2009;
  // clasificacion: "PG-13";
  // duracion: 162;
  // peliculaid: 1;
  // sinopsis: "Una película de ciencia ficción dirigida por James Cameron.";
  // titulo: "Avatar";

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

export default Movies_App;
