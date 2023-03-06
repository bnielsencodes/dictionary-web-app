import iconMoon from "../assets/images/icon-moon.svg";
import iconMoonPurple from "../assets/images/icon-moon-purple.svg";

export default function DarkModeToggle(props) {
  return (
    <div
      className={props.darkMode ? "dark-mode-toggle dark" : "dark-mode-toggle"}
    >
      <div className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
      </div>
      <img src={props.darkMode ? iconMoonPurple : iconMoon} alt="moon icon" />
    </div>
  );
}
