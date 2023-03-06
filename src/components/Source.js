import iconNewWindow from "../assets/images/icon-new-window.svg";

export default function Source(props) {
  return (
    <div className={props.darkMode ? "source dark" : "source"}>
      <p>Source</p>
      <div>
        <a href={props.wordData.src}>{props.wordData.src}</a>
        <img src={iconNewWindow} alt="" />
      </div>
    </div>
  );
}
