export default function Source(props) {
  return (
    <div className="source">
      <p>Source</p>
      <a href={props.wordData.src}>{props.wordData.src}</a>
    </div>
  );
}
