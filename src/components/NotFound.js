// emoji icon from icons8.com
import emojiIcon from "../assets/images/icons8-confused-face-96.png";

export default function NotFound(props) {
  return (
    <div className="not-found">
      <img className="not-found__icon" src={emoji} alt="" aria-hidden="true" />
    <div className={props.darkMode ? "not-found dark" : "not-found"}>
        src={emojiIcon}
      <h1 className="not-found__title">No Definitions Found</h1>
      <p className="not-found__message">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
