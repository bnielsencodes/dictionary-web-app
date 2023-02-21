export default function Meaning(props) {
  const definitions = props.item.definitions.map((item) => {
    return <li>{item.definition}</li>;
  });

  return (
    <div className="meaning">
      <div className="box">
        <p className=""></p>
      </div>
      <p className="">Meaning</p>
      <ul className="">{definitions}</ul>
      <dl className="synonyms">
        <dt>
          <p className="">Synonyms</p>
        </dt>
        <dd></dd>
      </dl>
    </div>
  );
}
