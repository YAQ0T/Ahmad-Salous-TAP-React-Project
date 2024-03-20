import { Link } from "react-router-dom";
import { CardInfo } from "./card-info/card-info";
import styles from "./card.module.css";
export function Card({ image, title, name, stars, author, id }) {
  return (
    <div className={styles.card}>
      <Link to={`/details/${id}`}>
        <img src={image} alt={image} />
        <CardInfo title={title} name={name} stars={stars} author={author} />
      </Link>
    </div>
  );
}
