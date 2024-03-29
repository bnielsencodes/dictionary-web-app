import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Main from "./components/Main";
import Meaning from "./components/Meaning";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [valid, setValid] = useState(true);
  const [mainState, setMainState] = useState();
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
  });
  const [wordData, setWordData] = useState("");
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

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
    return <Meaning key={nanoid()} item={item} darkMode={darkMode} />;
  });

  // main states object
  const mainStates = {
    blank: <div></div>,
    error: <NotFound darkMode={darkMode} />,
    main: (
      <Main
        darkMode={darkMode}
        wordData={wordData}
        meaningElements={meaningElements}
      />
    ),
    loading: <Loader />,
  };

  // function to validate searchInput
  const validateInput = function (e) {
    e.preventDefault();
    if (searchInput.searchInput === "") {
      setValid(false);
      setWordData(undefined);
      setMainState("blank");
    } else {
      setValid(true);
      getWordData(searchInput.searchInput);
    }
  };

  const getWordData = async function (param) {
    try {
      setMainState("loading");
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
      );

      if (!response.ok) throw new Error(`⚠️ Error (${response.status})`);
      const [data] = await response.json();
      const dataObj = {
        word: data.word,
        phonetic: data.phonetics[0]?.text || "",
        audio: data.phonetics.filter((phonetic) => phonetic.audio !== "")[0]
          .audio,
        meanings: data.meanings,
        src: data.sourceUrls[0] || "",
        id: nanoid(),
      };
      setMeanings(data.meanings);
      setWordData(dataObj);
      setMainState("main");
    } catch (error) {
      console.warn(error);
      setMainState("error");
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="app__inner">
        <Header
          handleSearchChange={handleSearchChange}
          searchInput={searchInput}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          valid={valid}
          validateInput={validateInput}
        />
        <main className={darkMode ? "main dark" : "main"}>
          {mainStates[mainState]}
        </main>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}
