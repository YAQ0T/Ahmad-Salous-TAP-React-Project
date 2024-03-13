import styles from "./search-container.module.css";
import { Search } from "./search/search";
import { SelectList } from "./select-list/select-list";

export function SearchContainer() {
  return (
    <div className={styles.searchContainer}>
      <Search />
      <div className={styles.modifyContainer}>
        <SelectList label={"Sort by:"} />
        <SelectList label={"Filter by:"} />
      </div>
    </div>
  );
}
