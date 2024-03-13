import styles from "./select-list.module.css";

export function SelectList({ label, options, id }) {
  return (
    <div className={styles.selectContainer} id={id}>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        <option value="default">Default</option>
      </select>
    </div>
  );
}
