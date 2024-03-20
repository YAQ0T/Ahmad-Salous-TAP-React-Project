import { SubTopics } from "../../../shared-components/subTopics/subTopics";
import styles from "./lower-details.module.css";

export function LowerDetails({ data }) {
  return (
    <div className={styles.lowerDetailsContainer}>
      <SubTopics data={data} />
    </div>
  );
}
