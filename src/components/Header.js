import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="app logo" />
      <div className="header--right">
      </div>
    </div>
  );
}
