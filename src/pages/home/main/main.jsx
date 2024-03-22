import { useEffect, useState } from "react";
import { Cards } from "./cards/cards";
import styles from "./main.module.css";
import { SearchContainer } from "./search-container/search-container";
import { SearchResults } from "./search-results/search-results";
import UseAxios from "../../../hooks/useAxios";
export function Main() {
  const [originalCards, setOriginalCards] = useState([]);
  const [modifiedCards, setModifiedCards] = useState([]);
  const { res, error } = UseAxios(
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
