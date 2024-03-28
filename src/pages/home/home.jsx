import { useEffect, useRef, useState } from "react";
import { Cards } from "./cards/cards";
import styles from "./home.module.css";
import { SearchContainer } from "./search-container/search-container";
import { SearchResults } from "./search-results/search-results";
import useAxios from "../../hooks/useAxios";
import sortCards from "../../utils/sort-cards";
import filterCards from "../../utils/filter-cards";
export function Home() {
  const [originalCards, setOriginalCards] = useState([]);
  const [modifiedCards, setModifiedCards] = useState([]);
  const { res, error } = useAxios(
    "https://tap-web-1.herokuapp.com/topics/list",
    "GET"
  );
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    setOriginalCards(res);
    setModifiedCards(res);
  }, [res]);

  //for searchContainer
  const [filterTypes, setFilterTypes] = useState([]);
  let sortBy = useRef("default");
  let filterBy = useRef("default");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const getFilterTypes = () => {
      if (originalCards) {
        const filterTypes = Array.from(
          new Set(originalCards.map((card) => card.category))
        );
        setFilterTypes(filterTypes);
      }
    };
    getFilterTypes();
  }, [originalCards]);
  ////for search
  const handleInputSearch = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };
  ////
  ////for selectList
  const handleSelectChange = (e, id) => {
    const changeBy = e.target.value;

    if (id === 0) {
      sortBy.current = changeBy;
      let sorted;
      if (sortBy.current === "default") {
        sorted = sortCards(originalCards, sortBy.current);
      } else {
        // Sort the modified cards
        sorted = sortCards(modifiedCards, sortBy.current);
      }
      // Filter the sorted cards
      const filtered = filterCards(sorted, filterBy.current);
      // Update modified cards
      setModifiedCards(filtered);
    }
    if (id === 1) {
      filterBy.current = changeBy;
      // Filter the original cards
      const filtered = filterCards(originalCards, filterBy.current);
      // Sort the filtered cards
      const sorted = sortCards(filtered, sortBy.current);
      // Update modified cards
      setModifiedCards(sorted);
    }
  };
  ////
  //

  if (!originalCards) return <h1>Waiting</h1>;
  return (
    <div className={styles.Main}>
      <SearchContainer
        originalCards={originalCards}
        setOriginalCards={setOriginalCards}
        modifiedCards={modifiedCards}
        setModifiedCards={setModifiedCards}
        filterTypes={filterTypes}
        sortBy={sortBy}
        filterBy={filterBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleInputSearch={handleInputSearch}
        handleSelectChange={handleSelectChange}
      />
      <SearchResults counter={modifiedCards.length} />
      <Cards cards={modifiedCards} />
    </div>
  );
}
