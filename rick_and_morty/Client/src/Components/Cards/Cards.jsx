import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return characters.map(({ id, name, species, gender, image }) => (
    <Card
      id={id}
      key={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
      onClose={() => props.onClose(id)}
    />
  ));
}
