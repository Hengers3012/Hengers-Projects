import appStyles from "./App.module.css";
// import Card from "./Components/Card/Card";
import Cards from "./Components/Cards/Cards.jsx";
import NavBar from "./Components/NavBar/NavBar";
import NavBarBottom from "./Components/NavBarInferior/NavBarBottom";
// import SearchBar from "./Components/SearchBar/SearchBar.jsx";
// import characters, { Rick } from "./data.js";
import characters from "./data.js";

function App() {
  return (
    <div className={appStyles.containerApp}>
      <div className={appStyles.contStart}>
        <div className={appStyles.stars} id="stars"></div>
        <div className={appStyles.stars2} id="stars2"></div>
        <div className={appStyles.stars3} id="stars3"></div>
      </div>

      <div className={appStyles.nave}></div>

      <div className={appStyles.navBar}>
        <NavBar />
      </div>

      <div className={appStyles.containerCards}>
        <Cards characters={characters} />
      </div>

      <div className={appStyles.navBarBottom}>
        <NavBarBottom />
      </div>
    </div>
  );
}

export default App;
