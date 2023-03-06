import searchIcon from "../assets/images/icon-search.svg";

export default function SearchBar(props) {
  return (
      <form onSubmit={props.handleSubmit}>
    <div className={props.darkMode ? "search-bar dark" : "search-bar"}>
        <input
          id="search-bar--input"
          type="text"
          placeholder="Search for any word..."
          onChange={props.handleSearchChange}
          name="searchInput"
          value={props.searchInput.searchInput}
        />
        <label htmlFor="search-bar--input">
          <button>
            <img className="search-icon" src={searchIcon} alt="" />
          </button>
        </label>
      </form>
    </div>
  );
}
