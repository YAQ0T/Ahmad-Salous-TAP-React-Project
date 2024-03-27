import styles from "./iconic-favorites-button.module.css";

export function IconicFavoritesButton({
  name,
  icon,
  backgroundColor,
  id,
  ...props
}) {
  return (
    <button
      className={styles.IconicFavoritesButtonContainer}
      style={{ backgroundColor: backgroundColor }}
      {...props}
    >
      {name}
      {icon}
    </button>
  );
}
