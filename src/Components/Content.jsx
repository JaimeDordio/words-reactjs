import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Definitions from "./Content/Definitions";
import Synonyms from "./Content/Synonyms";
import Antonyms from "./Content/Antonyms";

const StyledContent = styled.div`
  .extra_content {
    display: flex;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
  margin: 1em 0;
  font-weight: bold;
`;

const Content = (props) => {
  const { selectedWord, onWordClick } = props;
  const _definitions_baseURL =
    "http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/";

  const _synonyms_baseURL =
    "http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/";

  const _antonyms_baseURL =
    "http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/";

  const [definitionsResults, setDefinitionsResults] = useState(null);
  const [synonymsResults, setSynonymsResults] = useState(null);
  const [antonymsResults, setAntonymsResults] = useState(null);

  useEffect(() => {
    if (selectedWord) {
      axios
        .get(_definitions_baseURL + selectedWord)
        .then((response) => {
          console.log("Response definicion:", response);
          setDefinitionsResults(response.data.definiciones);
        })
        .catch((error) => {
          console.log("Error get definicion:", error);
        });

      axios
        .get(_synonyms_baseURL + selectedWord)
        .then((response) => {
          console.log("Response sinonimos:", response);
          setSynonymsResults(response.data.sinonimos);
        })
        .catch((error) => {
          console.log("Error get sinonimos:", error);
        });

      axios
        .get(_antonyms_baseURL + selectedWord)
        .then((response) => {
          console.log("Response antonimos:", response);
          setAntonymsResults(response.data.antonimos);
        })
        .catch((error) => {
          console.log("Error get antonimos:", error);
        });
    }
  }, [selectedWord]);

  return (
    <StyledContent>
      {selectedWord ? (
        <>
          <StyledH2>{selectedWord}</StyledH2>
          <Definitions definitions={definitionsResults} />
          <div className="extra_content">
            <Synonyms synonyms={synonymsResults} onWordClick={onWordClick} />
            <Antonyms antonyms={antonymsResults} onWordClick={onWordClick} />
          </div>
        </>
      ) : (
        <StyledH2>Busca una palabra</StyledH2>
      )}
    </StyledContent>
  );
};

export default Content;
