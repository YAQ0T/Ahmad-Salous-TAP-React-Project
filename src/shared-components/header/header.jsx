import { useContext } from "react";
import { MediumTitle } from "../Text/medium-title";
import { IconicButton } from "../iconic-button/iconic-button";
import styles from "./header.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Header({ showFavorites, setShowFavorites }) {
  const handleShowFavoritesClick = () => {
    if (showFavorites === "none") setShowFavorites("flex");
    else setShowFavorites("none");
  };
  const { ThemeState, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.Header}>
      <MediumTitle
        color={"var(--brand-primary)"}
        data={"Web Topics"}
        weight={"600"}
      />
      <nav className={styles.navButtons}>
        <IconicButton
          icon={ThemeState === "lightMode" ? "moon" : "sunny"}
          label={ThemeState === "lightMode" ? "Dark Mode" : "Light Mode"}
          onClick={() => toggleTheme()}
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
