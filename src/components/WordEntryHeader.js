export default function WordEntry(props) {
  return (
    <div className="word-entry">
      <p className="word-entry--heading">{props.word}</p>
      <p>{props.phonetic}</p>
    </div>
  );
}
