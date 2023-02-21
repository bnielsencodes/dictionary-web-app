export default function Source(props) {
  return (
    <div className="source">
      <p>Source</p>
      <a href={props.sourceUrl[0]}>{props.sourceUrl}</a>
    </div>
  );
}
