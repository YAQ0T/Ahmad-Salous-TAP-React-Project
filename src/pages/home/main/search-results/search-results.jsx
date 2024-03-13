import { BigTitle } from "../../../../shared-components/Text/big-title";
import styles from "./search-results.module.css";

export function SearchResults({ counter }) {
  return (
    <div className={styles.searchResults}>
      <BigTitle
        data={`"${counter}" Web Topics Found`}
        size={"25px"}
        weight={"800"}
      />
    </div>
  );
}
