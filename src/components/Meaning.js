import { nanoid } from "nanoid";

export default function Meaning(props) {
  const definitions = props.item.definitions.map((item) => {
    return (
      <li className="definition" key={nanoid()}>
        {item.definition}
        {item.example && (
          <p className="definition__example">"{item.example}"</p>
        )}
      </li>
    );
  });

  const synonyms = props.item.synonyms.map((item) => {
    return (
      <p className="synonyms" key={nanoid()}>
        {item}
      </p>
    );
  });

  return (
    <div className={props.darkMode ? "meaning dark" : "meaning"}>
      <div className="meaning__part-of-speech-container">
        <p className="meaning__part-of-speech">{props.item.partOfSpeech}</p>
        <hr className="line"></hr>
      </div>
      <p className="meaning__text">Meaning</p>
      <ul className="definitions">{definitions}</ul>
      {props.item.synonyms.length > 0 && (
        <dl className="synonyms-container">
          <dt>
            <p className="synonym-text">Synonyms</p>
          </dt>
          <dd className="synonym-list">{synonyms}</dd>
        </dl>
      )}
    </div>
  );
}
