import React, { useState } from "react";
import MainSequencer from "./Routes/MainSequencer";
import Keyboard from "./Routes/Keyboard";
import { PianoComponent } from "./Routes/PianoComponent";

const Home = () => {
  const [togglePiano, setTogglePiano] = useState(false);

  const handleClickPiano = () => {
    setTogglePiano(!togglePiano);
  };

  return (
    <div className="home_container">
      <div className="home-gap">
        {togglePiano ? <PianoComponent /> : <Keyboard />}
        <button onClick={() => handleClickPiano()}>
          {!togglePiano ? "Change to Piano" : "Change to Keyboard"}
        </button>
      </div>
      <MainSequencer />
    </div>
  );
};

export default Home;
