import styles from "./stars.module.css";

export function Stars({ numberOfStars }) {
  return (
    <div className={styles.starsContainer}>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
    </div>
  );
}
