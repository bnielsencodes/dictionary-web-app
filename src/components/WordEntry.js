import WordEntryHeader from "./WordEntryHeader";
import Meaning from "./Meaning";
import Source from "./Source";

export default function WordEntry(props) {
  const meanings = props.item.meanings.map((item) => {
    return (
      <Meaning
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="word-entry">
      <WordEntryHeader />
      <Source />
      {meanings}
    </div>
  );
}
