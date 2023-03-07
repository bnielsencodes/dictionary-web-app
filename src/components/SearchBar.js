import searchIcon from "../assets/images/icon-search.svg";

export default function SearchBar(props) {
  return (
      <form onSubmit={props.handleSubmit}>
    <div className={props.darkMode ? "search-bar dark" : "search-bar"}>
        <input
          id="search"
          className="search-bar__input"
          type="text"
          placeholder="Search for any word..."
          onChange={props.handleSearchChange}
          name="searchInput"
          value={props.searchInput.searchInput}
        />
        <label htmlFor="search-bar__input" className="search-bar__label">
          <button>
            <img
              className="search-bar__icon"
              src={searchIcon}
            />
          </button>
        </label>
      </form>
    </div>
  );
}
