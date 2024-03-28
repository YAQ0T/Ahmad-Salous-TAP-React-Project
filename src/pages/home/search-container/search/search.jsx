import { useEffect } from "react";
import styles from "./search.module.css";
import UseAxios from "../../../../hooks/useAxios";
import filterCards from "../../../../utils/filter-cards";
import sortCards from "../../../../utils/sort-cards";

export function Search({
  setOriginalCards,
  setModifiedCards,
  filterBy,
  sortBy,
  searchValue,
  debouncedSearched,
  handleInputSearch,
}) {
  const { res, error } = UseAxios(
    `https://tap-web-1.herokuapp.com/topics/list?phrase=${debouncedSearched}`
  );

  useEffect(() => {
    if (res) {
      setOriginalCards(res);
      setModifiedCards(res);
      const filtered = filterCards(res, filterBy.current);
      const sorted = sortCards(filtered, sortBy.current);
      setModifiedCards(sorted);
    }
  }, [res, filterBy, sortBy, setOriginalCards, setModifiedCards]);

  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className={styles.search}>
      <ion-icon name="search-outline"></ion-icon>
      <input
        onInput={handleInputSearch}
        value={searchValue}
        type="search"
        name="search"
        id="search"
        placeholder="Search the website..."
      />
    </div>
  );
}
