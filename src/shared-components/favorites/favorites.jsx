import { useContext } from "react";
import { Paragraph } from "../Text/Paragraph";
import { SmallCard } from "../small-card/small-card";
import styles from "./favorites.module.css";
import { FavoritesContext } from "../../contexts/FavoritesContext";
export function Favorites({ showFavorites, cards = [] }) {
  const { favsSet } = useContext(FavoritesContext);

  return (
    <div
      className={styles.favoritesContainer}
      style={{ display: showFavorites }}
    >
      <div className={styles.favoritesInnerContainer}>
        <Paragraph data={"My Favorites Topics"} size={"17px"} weight={"700"} />
        <div className={styles.smallCards}>
          {cards.map((card) => {
            if (!favsSet.has(card.id)) {
              return null;
            }
            return (
              <SmallCard
                image={card.image}
                name={card.topic}
                stars={card.rating}
                key={card.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
