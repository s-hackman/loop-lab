import styled from "styled-components";

const getBackground = (activated, triggered) => {
  switch (true) {
    case activated && triggered:
      return "#734194";
    case activated && !triggered:
      return "#6d81ed";
    case !activated && triggered:
      return "#eef";
    default:
      return "#e3e3e3";
  }
};

const Cell = styled.div.attrs(({ activated, triggered }) => ({
  style: {
    background: getBackground(activated, triggered),
  },
}))`
  border-radius: 3px;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  margin: 2px;
`;

export default Cell;
