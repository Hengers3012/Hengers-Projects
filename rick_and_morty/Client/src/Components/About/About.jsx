import React from "react";
import StylesAbout from "../About/About.module.css";

export default function About(props) {
  return (
    <div className={StylesAbout.aboutContainer}>
      <h1>Bienvenidos a mi primer Single Page Application</h1>
      <p>
        En esta App utilice los conocimientos adquiridos en SoyHenry y San
        Google
      </p>
      <img
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/11/batman-rie-2881801.jpg?itok=JaYFMEuM"
        alt="Not found"
      />
      <h3>Hola, mi nombre es Hengers Rosario</h3>
    </div>
  );
}
