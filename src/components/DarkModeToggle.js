import moonIcon from "../assets/images/icon-moon.svg";

export default function DarkModeToggle(props) {
  return (
    <div className="dark-mode-toggle">
      <div className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
      </div>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
}
