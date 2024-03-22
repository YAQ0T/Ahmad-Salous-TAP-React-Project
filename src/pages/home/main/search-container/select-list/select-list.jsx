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
  sortBy,
  filterBy,
}) {
  const handleChange = (e) => {
    const changeBy = e.target.value;

    if (id === 0) {
      sortBy.current = changeBy;
      let sorted;
      if (sortBy.current === "default") {
        sorted = sortCards(originalCards, sortBy.current);
      } else {
        // Sort the modified cards
        sorted = sortCards(modifiedCards, sortBy.current);
      }
      // Filter the sorted cards
      const filtered = filterCards(sorted, filterBy.current);
      // Update modified cards
      setModifiedCards(filtered);
    }
    if (id === 1) {
      filterBy.current = changeBy;
      // Filter the original cards
      const filtered = filterCards(originalCards, filterBy.current);
      // Sort the filtered cards
      const sorted = sortCards(filtered, sortBy.current);
      // Update modified cards
      setModifiedCards(sorted);
    }
  };

  return (
    <div className={styles.selectContainer}>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        onChange={(e) => {
          handleChange(e);
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
