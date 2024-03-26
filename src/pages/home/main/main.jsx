import { Cards } from "./cards/cards";
import styles from "./main.module.css";
import { SearchContainer } from "./search-container/search-container";
import { SearchResults } from "./search-results/search-results";
export function Main({
  originalCards,
  setOriginalCards,
  modifiedCards,
  setModifiedCards,
}) {
  if (!originalCards) return <h1>Waiting</h1>;
  return (
    <div className={styles.Main}>
      <SearchContainer
        originalCards={originalCards}
        setOriginalCards={setOriginalCards}
        modifiedCards={modifiedCards}
        setModifiedCards={setModifiedCards}
      />
      <SearchResults counter={modifiedCards.length} />
      <Cards cards={modifiedCards} />
    </div>
  );
}
