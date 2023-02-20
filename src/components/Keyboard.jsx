import React from "react";
import NumRow from "./keyboardRows/NumRow";
import QRow from "./keyboardRows/QRow";
import ARow from "./keyboardRows/ARow";
import ZRow from "./keyboardRows/ZRow";

const Keyboard = () => {
  return (
    <section className="keyboard">
      <NumRow />
      <br></br>
      <QRow />
      <br></br>
      <ARow />
      <br></br>
      <ZRow />
    </section>
  );
};

export default Keyboard;
