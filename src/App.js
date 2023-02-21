import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WordEntry from "./components/WordEntry";
import "./App.css";

export default function App() {
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
  });
  const [searchedWord, setSearchedWord] = useState([]);
  const [wordData, setWordData] = useState([]);

  // fetch API and set wordData state
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then((res) => res.json())
      .then((data) => setWordData(data));
  // map through fetch data to create WordEntry components
  const wordEntry = wordData.map((item) => {
    return <WordEntry key={item.id} item={item} />;
  });
  }, []);

  return (
    <div className="main">
      <Header />
      <SearchBar
      />
      {wordEntry}
    </div>
  );
}
