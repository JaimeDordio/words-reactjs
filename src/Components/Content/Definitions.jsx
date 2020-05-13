import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 10px 0 0 20px;
`;

const Definitions = (props) => {
  const { definitions } = props;

  return (
    <div>
      <h3>Definiciones</h3>
      <ol>
        {definitions
          ? definitions.map((def) => {
              return <ListItem key={def.definicion}>{def.definicion}</ListItem>;
            })
          : null}
      </ol>
    </div>
  );
};

export default Definitions;
