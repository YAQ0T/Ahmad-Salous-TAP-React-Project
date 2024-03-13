import styles from "./search.module.css";

export function Search() {
  return (
    <div className={styles.search}>
      <ion-icon name="search-outline"></ion-icon>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search the website..."
      />
    </div>
  );
}
