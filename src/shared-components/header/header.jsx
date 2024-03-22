import { useRef, useState } from "react";
import { MediumTitle } from "../Text/medium-title";
import { IconicButton } from "../iconic-button/iconic-button";
import styles from "./header.module.css";

export function Header({ showFavorites, setShowFavorites }) {
  const [colorMood, setColorMood] = useState("light");
  const documentRoot = useRef(document.documentElement);
  const handleShowFavoritesClick = () => {
    if (showFavorites === "none") setShowFavorites("flex");
    else setShowFavorites("none");
  };
  const handleDarkMood = () => {
    if (colorMood === "dark") {
      setColorMood("light");
      documentRoot.current.style.setProperty("--background-color", "#f5f5f5");
      documentRoot.current.style.setProperty(
        "--dark-background-color",
        "#1a1a1a"
      );
    } else {
      setColorMood("dark");
      documentRoot.current.style.setProperty("--background-color", "#1a1a1a");
      documentRoot.current.style.setProperty(
        "--dark-background-color",
        "#f5f5f5"
      );
    }
  };

  return (
    <div className={styles.Header}>
      <MediumTitle
        color={"var(--brand-primary)"}
        data={"Web Topics"}
        weight={"600"}
      />
      <nav className={styles.navButtons}>
        <IconicButton
          icon={"moon"}
          label={"Dark Mode"}
          onClick={handleDarkMood}
        />
        <IconicButton
          icon={"heart"}
          label={"Favorites"}
          onClick={handleShowFavoritesClick}
        />
      </nav>
    </div>
  );
}
