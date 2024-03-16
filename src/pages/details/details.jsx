import styles from "./details.module.css";
import { LowerDetails } from "./lower-details/lower-details";
import { UpperDetails } from "./upper-details/upper-details";

export function Details() {
  return (
    <div className={styles.detailsContainer}>
      <UpperDetails />
      <LowerDetails id={5} />
    </div>
  );
}
