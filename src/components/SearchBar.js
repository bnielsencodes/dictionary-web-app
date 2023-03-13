import searchIcon from "../assets/images/icon-search.svg";

export default function SearchBar(props) {
  return (
    <div className={props.darkMode ? "search-bar dark" : "search-bar"}>
      <form noValidate onSubmit={props.validateInput}>
        <input
          id="search-bar__input"
          className="search-bar__input"
          type="text"
          name="searchInput"
          value={props.searchInput.searchInput}
          data-valid={props.valid}
          placeholder="Search for any word..."
          onChange={props.handleSearchChange}
        />
        <label htmlFor="search-bar__input" hidden>
          Search for any word
        </label>
        <button className="search-bar__btn">
          <img
            className="search-bar__icon"
            src={searchIcon}
            alt="magnifying glass icon"
          />
        </button>
        <span className="search-bar__error">
          {props.valid ? "" : "Whoops, can’t be empty..."}
        </span>
      </form>
    </div>
  );
}
