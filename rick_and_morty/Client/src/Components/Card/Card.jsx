import cardStyles from "./Card.module.css";
export default function Card({ name, species, image, gender, onClose }) {
  return (
    <div className={cardStyles.containerCard}>
      <button onClick={onClose}>X</button>

      <div className={cardStyles.nameCharacter}>
        <h2>{name}</h2>
      </div>

      <div>
        <img src={image} alt="Not found" />
      </div>

      <div>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
