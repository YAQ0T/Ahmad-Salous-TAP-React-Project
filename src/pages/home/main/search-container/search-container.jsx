import { useEffect, useState } from "react";
import styles from "./search-container.module.css";
import { Search } from "./search/search";
import { SelectList } from "./select-list/select-list";
import { useRef } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
export function SearchContainer({
  originalCards,
  setOriginalCards,
  modifiedCards,
  setModifiedCards,
}) {
  const [filterTypes, setFilterTypes] = useState([]);
  let sortBy = useRef("default");
  let filterBy = useRef("default");
  //for search component
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearched = useDebounce(searchValue);
  //
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
      <Search
        setOriginalCards={setOriginalCards}
        setModifiedCards={setModifiedCards}
        sortBy={sortBy}
        filterBy={filterBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        debouncedSearched={debouncedSearched}
      />
      <div className={styles.modifyContainer}>
        <SelectList
          label={"Sort by:"}
          originalCards={originalCards}
          modifiedCards={modifiedCards}
          setModifiedCards={setModifiedCards}
          id={0}
          options={["topic", "name"]}
          sortBy={sortBy}
          filterBy={filterBy}
        />
        <SelectList
          label={"Filter by:"}
          originalCards={originalCards}
          modifiedCards={modifiedCards}
          setModifiedCards={setModifiedCards}
          id={1}
          options={filterTypes}
          sortBy={sortBy}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
}
