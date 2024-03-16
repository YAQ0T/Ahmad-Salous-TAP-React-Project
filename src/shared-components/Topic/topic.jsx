import styles from "./topic.module.css";

export function Topic({ data }) {
  return (
    <li className={styles.topicContainer}>
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      {data}
    </li>
  );
}
