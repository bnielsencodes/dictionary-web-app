import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [searchInput, setSearchInput] = useState({
    searchInput: "",
  });
  const [searchedWord, setSearchedWord] = useState([]);
  const [wordData, setWordData] = useState([]);


  return (
    <div className="main">
    </div>
  );
}
