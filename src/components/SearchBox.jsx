import { AiOutlineSearch } from "react-icons/ai"

import styles from "./SearchBox.module.css"

function SearchBox({ search, setSearch, searchHandler }) {
  const changeHandler = (event) => {
    const value = event.target.value.toLowerCase().trim()
    setSearch(value)
  }
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        placeholder="Search Title"
        onChange={changeHandler}
      />
      <button onClick={searchHandler}>
        <AiOutlineSearch />
      </button>
    </div>
  )
}

export default SearchBox
