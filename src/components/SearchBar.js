import searchIcon from "../assets/images/icon-search.svg";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <input
          id="search-bar--input"
          type="text"
          placeholder="Search for any word..."
          name="searchInput"
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
