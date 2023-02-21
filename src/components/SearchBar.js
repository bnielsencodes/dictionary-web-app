import searchIcon from "../assets/images/icon-search.svg";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <form onSubmit={props.handleSubmit}>
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
