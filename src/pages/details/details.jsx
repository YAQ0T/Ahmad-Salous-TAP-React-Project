import { CardWithButton } from "../../shared-components/card-with-button/card-with-button";
import styles from "./details.module.css";
import { UpperDetails } from "./upper-details/upper-details";

export function Details() {
  return (
    <div className={styles.detailsContainer}>
      <UpperDetails />
    </div>
  );
}
