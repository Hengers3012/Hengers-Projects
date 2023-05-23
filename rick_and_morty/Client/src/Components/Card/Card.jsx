import { Link } from "react-router-dom";
import cardStyles from "./Card.module.css";

export default function Card({ id, name, species, image, gender, onClose }) {
  return (
    <div className={cardStyles.containerCard}>
      <div className={cardStyles.containerButtonX}>
        <button onClick={onClose}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className={cardStyles.imageCharacter}>
        <img src={image} alt="Not found" />
        <div className={cardStyles.containerInfo}>
          <Link to={`/detail/${id}`}>
            <div className={cardStyles.nameCharacter}>
              <h2>{name}</h2>
            </div>{" "}
          </Link>
        </div>
      </div>

      {/* <div className={cardStyles.descriptionCharacter}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div> */}
    </div>
  );
}
