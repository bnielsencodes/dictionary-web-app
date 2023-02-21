import FontToggle from "./FontToggle";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="app logo" />
      <div className="header--right">
        <FontToggle />
        <DarkModeToggle />
      </div>
    </div>
  );
}
