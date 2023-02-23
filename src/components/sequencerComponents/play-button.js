import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.75em 2em;
  outline: none;
  background-color: #B71CBB;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  margin: 0.5em;

  Button:hover {
    background: "#39433e";
    cursor: pointer;
  }
`;

export default ({ playing, onClick }) => (
  <Button onClick={onClick}>{playing ? "Stop" : "Play"}</Button>
);
