import { MediumTitle } from "../Text/medium-title";
import { IconicButton } from "../iconic-button/iconic-button";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.Header}>
      <MediumTitle
        color={"var(--brand-primary)"}
        data={"Web Topics"}
        weight={"500"}
      />
      <nav className={styles.navButtons}>
        <IconicButton icon={"moon"} label={"Dark Mode"} />
        <IconicButton icon={"heart"} label={"Favorites"} />
      </nav>
    </div>
  );
}
