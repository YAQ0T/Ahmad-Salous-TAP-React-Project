import styles from "./subTopics.module.css";
import { BigTitle } from "../Text/big-title";
import { Topic } from "../Topic/topic";
export function SubTopics({ data }) {
  return (
    <div className={styles.subTopicsContainer}>
      <BigTitle
        data={`${data.topic} Sub Topics`}
        size={"24px"}
        weight={"800"}
      />

      <ul className={styles.Topics}>
        {data.subtopics.map((supTopic) => {
          return <Topic data={supTopic} key={supTopic} />;
        })}
      </ul>
    </div>
  );
}
