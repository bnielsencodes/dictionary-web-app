import { useState } from "react";
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
