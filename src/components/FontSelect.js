export default function FontSelect(props) {
  return (
    <div className={props.darkMode ? "font-select dark" : "font-select"}>
      <input
        id="font-button"
        className="font-select__button"
        type="checkbox"
        name="font-button"
      />
      <label className="btn-label" htmlFor="font-button">
        {font.name}
      </label>
      <ul className="font-select__list">
        <li className="font-select__item">
          <input
            id="sans"
            className="font-select__input"
            type="radio"
            name="font"
            onClick={toggleFont}
          />
          <label htmlFor="sans" className="font-select__label">
            Sans Serif
          </label>
        </li>
        <li className="font-select__item">
          <input
            id="serif"
            className="font-select__input"
            type="radio"
            name="font"
            onClick={toggleFont}
          />
          <label htmlFor="serif" className="font-select__label">
            Serif
          </label>
        </li>
        <li className="font-select__item">
          <input
            id="mono"
            className="font-select__input"
            type="radio"
            name="font"
            onClick={toggleFont}
          />
          <label htmlFor="mono" className="font-select__label">
            Mono
          </label>
        </li>
      </ul>
    </div>
  );
}
