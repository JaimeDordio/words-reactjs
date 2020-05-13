import React from "react";
import styled from "styled-components";

const SynonymsStyle = styled.div`
  width: 50%;
`;

const ListItem = styled.li`
  padding-top: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Synonyms = (props) => {
  const { synonyms, onWordClick } = props;

  return (
    <SynonymsStyle>
      <h4>Sinónimos</h4>
      <ul>
        {synonyms && Array.isArray(synonyms)
          ? synonyms.map((syn) => {
              return (
                <ListItem
                  key={syn.sinonimo}
                  onClick={() => onWordClick(syn.sinonimo)}
                >
                  {syn.sinonimo}
                </ListItem>
              );
            })
          : null}
      </ul>
    </SynonymsStyle>
  );
};

export default Synonyms;
