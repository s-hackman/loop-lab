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
    <div className="home_container">
      <div className="home-gap">
        {togglePiano ? <PianoComponent /> : <Keyboard />}
        <button onClick={() => handleClickPiano()}>
          {!togglePiano ? "Show Piano" : "Show Keyboard"}
        </button>
        <button onClick={() => handleClick()}>
          {!toggle ? "Show" : "Hide"} Sequencer
        </button>
      </div>
      <div>{toggle && <MainSequencer />}</div>
    </div>
  );
};

export default Home;
