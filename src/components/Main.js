import AudioPlayer from "./AudioPlayer";
import Source from "./Source";

export default function Main(props) {
  const borderLightStyles = {
    borderBottom: props.wordData ? "1px solid #e9e9e9" : "0",
  };

  const borderDarkStyles = {
    borderBottom: props.wordData ? "1px solid #383838" : "0",
  };

  return (
    <div className={props.darkMode ? "main dark" : "main"}>
      <div
        className="main--inner-container"
        style={props.darkMode ? borderDarkStyles : borderLightStyles}
      >
        <div className="main--header">
          <div className="main--header-left">
            <p className="main--heading">{props.wordData.word}</p>
            <p className="main--phonetic">{props.wordData.phonetic}</p>
          </div>
          {props.wordData && <AudioPlayer wordData={props.wordData} />}
        </div>
        {props.meaningElements}
      </div>
      {props.wordData && (
        <Source darkMode={props.darkMode} wordData={props.wordData} />
      )}
    </div>
  );
}
