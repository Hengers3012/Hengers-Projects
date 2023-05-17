import { useState } from "react";
import appStyles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
// import Card from "./Components/Card/Card";
import Cards from "./Components/Cards/Cards.jsx";
import About from "./Components/About/About.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import NavBarBottom from "./Components/NavBarInferior/NavBarBottom.jsx";
// import SearchBar from "./Components/SearchBar/SearchBar.jsx";
// import characters, { Rick } from "./data.js";
// import characters from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("Personaje ya Existe");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  return (
    <div className={appStyles.containerApp}>
      <div className={appStyles.contStart}>
        <div className={appStyles.stars} id="stars"></div>
        <div className={appStyles.stars2} id="stars2"></div>
        <div className={appStyles.stars3} id="stars3"></div>
      </div>

      <div className={appStyles.nave}></div>

      <div className={appStyles.navBar}>
        <NavBar onSearch={onSearch} />
      </div>
      <div className={appStyles.containerCards}>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
      <div className={appStyles.navBarBottom}>
        <NavBarBottom />
      </div>
    </div>
  );
}

export default App;
