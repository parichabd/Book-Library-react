import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css"
function SearchBooks({ search, setSearch ,searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter Your Books name ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBooks;
