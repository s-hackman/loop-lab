import React, { useState } from "react";
import NumRow from "./keyboardRows/NumRow";
import QRow from "./keyboardRows/QRow";
import ARow from "./keyboardRows/ARow";
import ZRow from "./keyboardRows/ZRow";
import MainSequencer from "./MainSequencer";


const Keyboard = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <>
      {toggle && <MainSequencer />}
      <button onClick={() => handleClick()}>Toggle</button>
      <section className="keyboard">
        <NumRow />
        <br></br>
        <QRow />
        <br></br>
        <ARow />
        <br></br>
        <ZRow />
      </section>
    </>
  );
};

export default Keyboard;
