import React from "react";
import styled from "styled-components";

const AntonymsStyle = styled.div`
  width: 50%;
`;

const ListItem = styled.li`
  padding-top: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Anotnyms = (props) => {
  const { antonyms, onWordClick } = props;

  return (
    <AntonymsStyle>
      <h4>Antónimos</h4>
      <ul>
        {antonyms && Array.isArray(antonyms)
          ? antonyms.map((ant) => {
              return (
                <ListItem
                  key={ant.antonimo}
                  onClick={() => onWordClick(ant.antonimo)}
                >
                  {ant.antonimo}
                </ListItem>
              );
            })
          : null}
      </ul>
    </AntonymsStyle>
  );
};

export default Anotnyms;
