import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
  );
}
