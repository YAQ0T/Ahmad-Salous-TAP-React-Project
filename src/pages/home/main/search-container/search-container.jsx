import { useEffect, useState } from "react";
import styles from "./search-container.module.css";
import { Search } from "./search/search";
import { SelectList } from "./select-list/select-list";

export function SearchContainer({
  originalCards,
  modifiedCards,
  setModifiedCards,
}) {
  const [filterTypes, setFilterTypes] = useState([]);

  const getFilterTypes = () => {
    const filterTypes = Array.from(
      new Set(originalCards.map((card) => card.category))
    );
    setFilterTypes(filterTypes);
  };
  useEffect(() => {
    getFilterTypes();
  }, [originalCards]);
  return (
    <div className={styles.searchContainer}>
      <Search />
      <div className={styles.modifyContainer}>
        <SelectList
          label={"Sort by:"}
          originalCards={originalCards}
          modifiedCards={modifiedCards}
          setModifiedCards={setModifiedCards}
          id={0}
          options={["topic", "name"]}
        />
        <SelectList
          label={"Filter by:"}
          originalCards={originalCards}
          modifiedCards={modifiedCards}
          setModifiedCards={setModifiedCards}
          id={1}
          options={filterTypes}
        />
      </div>
    </div>
  );
}
