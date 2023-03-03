import Source from "./Source";

export default function WordEntry(props) {
  return (
    <div className="word-entry">
      <div>
        <p className="word-entry--heading">{props.wordData.word}</p>
        <p>{props.wordData.phonetic}</p>
      </div>
      {props.meaningElements}
      {props.wordData && <Source wordData={props.wordData} />}
    </div>
  );
}
