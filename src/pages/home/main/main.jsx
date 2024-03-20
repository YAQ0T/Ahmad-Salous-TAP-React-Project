import { Cards } from "./cards/cards";
import styles from "./main.module.css";
import { SearchContainer } from "./search-container/search-container";
import { SearchResults } from "./search-results/search-results";
export function Main({ cards }) {
  return (
    <div className={styles.Main}>
      <SearchContainer />
      <SearchResults counter={cards.length} />
      <Cards cards={cards} />
    </div>
  );
}
