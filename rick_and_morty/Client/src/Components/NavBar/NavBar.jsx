import SearchBar from "../SearchBar/SearchBar";
import navBarStyles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={navBarStyles.navBarContainer}>
      <div className={navBarStyles.navBarSearch}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}
