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

  // ano_estreno: 2009;
  // clasificacion: "PG-13";
  // duracion: 162;
  // peliculaid: 1;
  // sinopsis: "Una película de ciencia ficción dirigida por James Cameron.";
  // titulo: "Avatar";

  return (
    <div>
      <h1>MOVIES APP</h1>{" "}
      <table>
        <thead>
          <tr className="encabezado">
            <th>id</th>
            <th>titulo</th>
            <th>sinopsis</th>
            <th>clasificación</th>
            <th>duracion</th>
            <th>estreno</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            <tr>
              <td>{movie.titulo}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies_App;
