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
    <>
      <div
        className="main__inner-container"
        style={props.darkMode ? borderDarkStyles : borderLightStyles}
      >
        <div className="main__header">
          <div className="main__header-left">
            <h1 className="main__heading">{props.wordData.word}</h1>
            <p className="main__phonetic">{props.wordData.phonetic}</p>
          </div>
          {props.wordData && <AudioPlayer wordData={props.wordData} />}
        </div>
        {props.meaningElements}
      </div>
      {props.wordData && (
        <Source darkMode={props.darkMode} wordData={props.wordData} />
      )}
    </>
  );
}
