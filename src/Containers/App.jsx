import React from "react";
import { useState } from "react";

import Search from "../Components/Search";
import Content from "../Components/Content";

const App = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  return (
    <>
      <h1>Diccionario</h1>
      <Search onWordClick={setSelectedWord} />
      <Content selectedWord={selectedWord} onWordClick={setSelectedWord} />
    </>
  );
};

export default App;
