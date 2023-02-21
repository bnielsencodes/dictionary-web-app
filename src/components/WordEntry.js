import WordEntryHeader from "./WordEntryHeader";
import Source from "./Source";

export default function WordEntry(props) {
  return (
    <div className="word-entry">
      <Source sourceUrl={props.item.sourceUrls} />
      <WordEntryHeader
        word={props.wordData.word}
        phonetic={props.wordData.phonetic}
      />
      {props.meaningElements}
    </div>
  );
}
