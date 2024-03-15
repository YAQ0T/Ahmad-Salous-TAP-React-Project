import { Paragraph } from "../../Text/paragraph";
import { Stars } from "../../stars/stars";
import styles from "./card-info.module.css";
export function CardInfo({ title, name, stars, author }) {
  return (
    <div className={styles.cardInfo}>
      <Paragraph data={title} size={"13px"} weight={700} />
      <Paragraph data={name} size={"16px"} weight={800} />
      <br />
      <Stars numberOfStars={stars} />
      <Paragraph data={author} size={"12px"} color={"var(--author-color)"} />
    </div>
  );
}
