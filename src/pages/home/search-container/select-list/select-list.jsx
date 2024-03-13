import styles from "./select-list.module.css";

export function SelectList({ label, options, id }) {
  return (
    <div className={styles.selectContainer}>
      <label for={id}>{label}</label>
      <select name={label} id={id}>
        <option value="default">Default</option>
      </select>
    </div>
  );
}
