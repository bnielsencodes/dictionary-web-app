import Source from "./Source";

export default function Main(props) {
  return (
    <div className="main">
      <div>
        <p className="word-entry--heading">{props.wordData.word}</p>
        <p>{props.wordData.phonetic}</p>
      </div>
      {props.meaningElements}
      {props.wordData && <Source wordData={props.wordData} />}
    </div>
  );
}
