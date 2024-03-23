import { Card } from "../../../../shared-components/card/card";
import styles from "./cards.module.css";

export function Cards({ cards }) {
  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            image={require(`../../../../assits/logos/${card.image}`)}
            title={card.category}
            name={card.topic}
            stars={5}
            author={card.name}
          />
        );
      })}
    </div>
  );
}
