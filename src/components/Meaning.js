import { nanoid } from "nanoid";

export default function Meaning(props) {
  const definitions = props.item.definitions.map((item) => {
    return <li key={nanoid()}>{item.definition}</li>;
  });

  const synonyms = props.item.synonyms.map((item) => {
    return <p key={nanoid()}>{item}</p>;
  });

  return (
    <div className="meaning">
      <div className="box">
        <p className="">{props.item.partOfSpeech}</p>
      </div>
      <p className="">Meaning</p>
      <ul className="">{definitions}</ul>
      <dl className="synonyms">
        <dt>
          <p className="">Synonyms</p>
        </dt>
        <dd>{synonyms}</dd>
      </dl>
    </div>
  );
}
