import styles from "./search-container.module.css";
import { Search } from "./search/search";
import { SelectList } from "./select-list/select-list";
import { useDebounce } from "../../../hooks/useDebounce";
export function SearchContainer({
  originalCards,
  setOriginalCards,
  modifiedCards,
  setModifiedCards,
  filterTypes,
  sortBy,
  filterBy,
  searchValue,
  setSearchValue,
  handleInputSearch,
  handleSelectChange,
}) {
  //for search component
  const debouncedSearched = useDebounce(searchValue);
  //

  return (
    <div className={styles.searchContainer}>
      <Search
        setOriginalCards={setOriginalCards}
        setModifiedCards={setModifiedCards}
        sortBy={sortBy}
        filterBy={filterBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        debouncedSearched={debouncedSearched}
        handleInputSearch={handleInputSearch}
      />
      <div className={styles.modifyContainer}>
        <SelectList
          label={"Sort by:"}
          id={0}
          options={["topic", "name"]}
          handleSelectChange={handleSelectChange}
        />
        <SelectList
          label={"Filter by:"}
          id={1}
          options={filterTypes}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </div>
  );
}
