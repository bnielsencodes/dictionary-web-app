import logo from "../assets/images/logo.svg";
import FontSelect from "./FontSelect";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__top">
        <img className="header__logo" src={logo} alt="book logo" />
        <div className="header__controls">
          <FontSelect darkMode={props.darkMode} />
          <DarkModeToggle
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
          />
        </div>
      </div>
      <SearchBar
        handleSearchChange={props.handleSearchChange}
        searchInput={props.searchInput}
        handleSubmit={props.handleSubmit}
        darkMode={props.darkMode}
        valid={props.valid}
        validateInput={props.validateInput}
      />
    </header>
  );
}
