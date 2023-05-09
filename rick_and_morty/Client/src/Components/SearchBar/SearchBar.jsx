export default function SearchBar(props) {
  return (
    <div>
      <input id="search" type="search" />
      <button onClick={() => props.onSearch("Aquin recibo un ID")}>
        Agregar
      </button>
    </div>
  );
}
//Matias cabalo
