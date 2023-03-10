import { useEffect, useState } from "react";

export default function FontSelect(props) {
  const [font, setFont] = useState({ name: "Sans Serif", type: "sans" });

  useEffect(() => {
    const prefersFont = window.localStorage.getItem("font");
    if (prefersFont) {
      setFont({
        name: { sans: "Sans Serif", serif: "Serif", mono: "Mono" }[prefersFont],
        type: prefersFont,
      });
    }
  }, []);

  useEffect(() => {
    document.querySelector("html").dataset.font = font.type;
    document.querySelector(".font-select__button").checked = false;
  }, [font]);

  const toggleFont = function () {
    const selectedFont = document.querySelector(
      ".font-select__input:checked + label"
    );
    window.localStorage.setItem("font", selectedFont.htmlFor);
    setFont({
      name: selectedFont.textContent,
      type: selectedFont.htmlFor,
    });
  };

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
