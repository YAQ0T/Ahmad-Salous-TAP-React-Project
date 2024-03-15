import { Paragraph } from "../Text/paragraph";
import { IconicFavoritesButton } from "../iconic-favorites-button/iconic-favorites-button";
import styles from "./card-with-button.module.css";

export function CardWithButton({ image, name, author }) {
  return (
    <div className={styles.cardWithButtonContainer}>
      <img src={`/logos/${image}`} alt={image} />
      <div className={styles.cardWithButtonInfo}>
        <p>
          <b>{name}</b> by <a href="">{author}</a>
        </p>

        <div className={styles.cardWithButtonInnerInfo}>
          <Paragraph data={"Interested about this Topic?"} weight={"600"} />
          <IconicFavoritesButton
            name={"Add to Favorites"}
            backgroundColor={"var(--brand-secondary)"}
            icon={<ion-icon name="heart-outline"></ion-icon>}
          />
          <Paragraph
            data={"Unlimited Credits"}
            size={"13px"}
            color={"var(--author-color)"}
          />
        </div>
      </div>
    </div>
  );
}
