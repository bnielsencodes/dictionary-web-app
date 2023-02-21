import WordEntryHeader from "./WordEntryHeader";
import Source from "./Source";

export default function WordEntry(props) {
  return (
    <div className="word-entry">
      <WordEntryHeader
        word={props.wordData.word}
        phonetic={props.wordData.phonetic}
      />
      {props.meaningElements}
      {props.wordData && <Source wordData={props.wordData} />}
    </div>
  );
}
