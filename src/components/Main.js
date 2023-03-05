import Source from "./Source";

export default function Main(props) {
  return (
    <div className="main">
      <div className="main--inner-container">
        <div className="main--header">
          <p className="main--heading">{props.wordData.word}</p>
          <p className="main--phonetic">{props.wordData.phonetic}</p>
        </div>
        {props.meaningElements}
      </div>
      {props.wordData && <Source wordData={props.wordData} />}
    </div>
  );
}
