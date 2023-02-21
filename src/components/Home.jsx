import React, { useState } from "react";
import MainSequencer from "./Routes/MainSequencer";
import Keyboard from "./Routes/Keyboard";
import { PianoComponent } from "./Routes/PianoComponent";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [togglePiano, setTogglePiano] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClickPiano = () => {
    setTogglePiano(!togglePiano);
  };

  return (
    <div>
      {toggle && <MainSequencer />}
      <button onClick={() => handleClick()}>
        {!toggle ? "Show" : "Hide"} Sequencer
      </button>
      {togglePiano ? <Keyboard /> : <PianoComponent />}
      <button onClick={() => handleClickPiano()}>
        {" "}
        {!togglePiano ? "Show Keyboard" : "Show Piano"}
      </button>
    </div>
  );
};

export default Home;
