import filterCards from "../../../../../utils/filter-cards";
import sortCards from "../../../../../utils/sort-cards";
import styles from "./select-list.module.css";

export function SelectList({
  label,
  originalCards,
  modifiedCards,
  setModifiedCards,
  id,
  options,
}) {
  const handleSort = (e) => {
    const changeBy = e.target.value;

    if (id === 0) {
      const changeBy = e.target.value;
      if (changeBy === "default") {
        setModifiedCards(originalCards);
        return;
      }
      setModifiedCards(sortCards(modifiedCards, changeBy));
    }
    if (id === 1) {
      setModifiedCards(filterCards(modifiedCards, changeBy));
    }
  };

  return (
    <div className={styles.selectContainer}>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        onChange={(e) => {
          handleSort(e);
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
