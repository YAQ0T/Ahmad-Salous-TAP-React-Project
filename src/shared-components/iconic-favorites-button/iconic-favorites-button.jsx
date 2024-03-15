import styles from "./iconic-favorites-button.module.css";

export function IconicFavoritesButton({
  name,
  icon,
  backgroundColor,
  id,
  ...prep
}) {
  return (
    <button
      className={styles.IconicFavoritesButtonContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
      {icon}
    </button>
  );
}
