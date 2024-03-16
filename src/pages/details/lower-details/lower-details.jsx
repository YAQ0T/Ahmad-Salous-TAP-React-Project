import { SubTopics } from "../../../shared-components/subTopics/subTopics";
import styles from "./lower-details.module.css";

export function LowerDetails({ id }) {
  return (
    <div className={styles.lowerDetailsContainer}>
      <SubTopics id={id} />
    </div>
  );
}
