import FontToggle from "./FontToggle";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/images/logo.svg";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header--top">
        <img className="logo" src={logo} alt="app logo" />
        <div className="controls">
          <FontSelect />
          <DarkModeToggle />
        </div>
      </div>
      <SearchBar
        handleSearchChange={props.handleSearchChange}
        searchInput={props.searchInput}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
}
