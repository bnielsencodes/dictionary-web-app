import WordEntryHeader from "./WordEntryHeader";
import Meaning from "./Meaning";
import Source from "./Source";
import { nanoid } from "nanoid";

export default function WordEntry(props) {
  const meanings = props.item.meanings.map((item) => {
    return (
      <Meaning
        key={item.id}
        item={item}
        nanoid={nanoid}
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
