import { Paragraph } from "../Text/paragraph";
import { SmallCard } from "../small-card/small-card";
import styles from "./favorites.module.css";

export function Favorites() {
  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.favoritesInnerContainer}>
        <Paragraph data={"My Favorites Topics"} size={"17px"} weight={"700"} />
        <div className={styles.smallCards}>
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />{" "}
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />{" "}
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"react.webp"} name={"REACT"} stars={5} />
          <SmallCard image={"html.png"} name={"HTML"} stars={5} />
        </div>
      </div>
    </div>
  );
}
