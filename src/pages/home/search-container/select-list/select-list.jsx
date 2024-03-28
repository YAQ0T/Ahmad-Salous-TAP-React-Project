import styles from "./select-list.module.css";

export function SelectList({ label, id, options, handleSelectChange }) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        onChange={(e) => {
          handleSelectChange(e, id);
        }}
      >
        <option value="default">Default</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
