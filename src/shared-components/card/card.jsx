import { CardInfo } from "./card-info/card-info";
import styles from "./card.module.css";
export function Card({ image, title, name, stars, author }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={image} />
      <CardInfo title={title} name={name} stars={stars} author={author} />
    </div>
  );
}
