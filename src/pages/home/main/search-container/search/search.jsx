import { useEffect, useState } from "react";
import styles from "./search.module.css";
import UseAxios from "../../../../../hooks/useAxios";
import debounce from "../../../../../utils/debounce-cards";
import filterCards from "../../../../../utils/filter-cards";
import sortCards from "../../../../../utils/sort-cards";

export function Search({
  value,
  setOriginalCards,
  setModifiedCards,
  filterBy,
  sortBy,
}) {
  const [searchValue, setSearchValue] = useState("");
  const { res, error } = UseAxios(
    `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`
  );
  const handleInput = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };
  useEffect(() => {
    const [debouncedSetCards, cancel] = debounce(() => {
      console.log(searchValue);
      setOriginalCards(res);
      setModifiedCards(res);
      const filtered = filterCards(res, filterBy.current);
      // Sort the filtered cards
      const sorted = sortCards(filtered, sortBy.current);
      // Update modified cards
      setModifiedCards(sorted);
    }, 300);

    debouncedSetCards(); // Initial call

    // Cleanup function
    return () => cancel();
  }, [searchValue, res, setOriginalCards, setModifiedCards]);

  return (
    <div className={styles.search}>
      <ion-icon name="search-outline"></ion-icon>
      <input
        onInput={handleInput}
        value={searchValue}
        type="search"
        name="search"
        id="search"
        placeholder="Search the website..."
      />
    </div>
  );
}
