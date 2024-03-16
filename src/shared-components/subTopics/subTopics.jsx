import styles from "./subTopics.module.css";
import { BigTitle } from "../Text/big-title";
import { Topic } from "../Topic/topic";
export function SubTopics({ id }) {
  return (
    <div className={styles.subTopicsContainer}>
      <BigTitle data={"HTML Sub Topics"} size={"24px"} weight={"800"} />

      <ul className={styles.Topics}>
        <Topic data={"HTML syntax and structure"} />
        <Topic data={"HTML elements and attributes"} />

        <Topic data={"HTML forms and input elements"} />

        <Topic data={"HTML tables and lists"} />

        <Topic data={"HTML multimedia elements (audio, video, images)"} />

        <Topic data={"HTML accessibility and semantic markup"} />
      </ul>
    </div>
  );
}
