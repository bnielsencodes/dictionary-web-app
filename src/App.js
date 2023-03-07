import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Main from "./components/Main";
import Meaning from "./components/Meaning";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
  });
  const [searchedWord, setSearchedWord] = useState([]);
  const [wordData, setWordData] = useState("");
  const [meanings, setMeanings] = useState([]);

  // toggle dark mode
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  // set searchInput state on every keystroke
  function handleSearchChange(event) {
    setSearchInput((prevSearchData) => {
      return {
        ...prevSearchData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // fetch API and set wordData state
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then((res) => res.json())
      .then((data) => {
        let dataObj = [];
        data.forEach((item) => {
          dataObj.push({
            word: item.word,
            phonetic: item.phonetics[0]?.text || "",
            audio: item.phonetics[0]?.audio || "",
            meanings: item.meanings,
            src: item.sourceUrls[0] || "",
            id: nanoid(),
          });
        });
        setWordData(dataObj[0]);
        setMeanings(dataObj[0].meanings);
      });
  }, [searchedWord]);

  const meaningElements = meanings.map((item) => {
    return <Meaning key={nanoid()} item={item} />;
  });

  return (
      <Header
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
        handleSubmit={handleSubmit}
      />
      <Main wordData={wordData} meaningElements={meaningElements} />
    <div className={darkMode ? "app dark" : "app"}>
      <div className="app--inner">
      </div>
    </div>
  );
}
