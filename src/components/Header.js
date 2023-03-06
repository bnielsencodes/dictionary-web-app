import logo from "../assets/images/logo.svg";
import FontSelect from "./FontSelect";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header--top">
        <img className="logo" src={logo} alt="app logo" />
        <div className="controls">
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
      />
    </div>
  );
}
