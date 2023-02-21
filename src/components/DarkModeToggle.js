import moonIcon from "../assets/images/icon-moon.svg";

export default function DarkModeToggle() {
  return (
    <div className="dark-mode-toggle">
      <div className="toggler--slider">
        <div className="toggler--slider--circle"></div>
      </div>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
}
