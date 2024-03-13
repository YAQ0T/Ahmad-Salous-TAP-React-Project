import styles from "./brand.module.css";

export function Brand() {
  return (
    <div className={styles.brandContainer}>
      <div id={styles.brandLeft}></div>
      <div id={styles.brandRight}></div>
    </div>
  );
}
