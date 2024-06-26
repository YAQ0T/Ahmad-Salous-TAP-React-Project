import styles from "./small-card.module.css";
import { Paragraph } from "../Text/Paragraph";
import { Stars } from "../stars/stars";
export function SmallCard({ image, name, stars }) {
  return (
    <div className={styles.smallCard}>
      <img src={require(`../../assits/logos/${image}`)} alt={image} />
      <div className={styles.smallCardInfo}>
        <Paragraph size={"16px"} weight={"800"} data={name} />
        <Stars numberOfStars={stars} />
      </div>
    </div>
  );
}
