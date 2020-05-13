import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 25px;
  width: 350px;
  margin-right: 10px;
  padding: 6px 15px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchInputButton = styled.button`
  display: none;
`;

const Search = (props) => {
  const { onWordClick } = props;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onWordClick(document.getElementById("wordInput").value);
        }}
      >
        <SearchInput
          placeholder="Busca aqui..."
          type="text"
          name="word"
          id="wordInput"
        />
        <SearchInputButton type="submit">Buscar</SearchInputButton>
      </form>
    </div>
  );
};

export default Search;
