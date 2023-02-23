import React from "react";
import NumRow from "../keyboardRows/NumRow";
import QRow from "../keyboardRows/QRow";
import ARow from "../keyboardRows/ARow";
import ZRow from "../keyboardRows/ZRow";
import "../../styles/keyboard.css";

const Keyboard = () => {
  return (
    <>
      <h1>Keyboard Sampler</h1>
      <p>Click or type to make beats!</p>
      <section className="keyboard-info"></section>
      <div className="container">
        <div>
          <NumRow />
          <QRow />
          <ARow />
          <ZRow />
          <div className="keyboard-row bottom-row">
            <div className="key lower-left lowercase">
              <span className="lower-row-text"></span>
            </div>
            <div className="key lower-left lowercase">
              <span className="lower-row-text"></span>
            </div>
            <div className="key lower-left lowercase">
              <span className="lower-row-text"></span>
            </div>
            <div className="key lower-center lowercase extra-size-two">
              <span className="lower-row-text"></span>
            </div>
            <div className="key space-bar"></div>
            <div className="key lower-center lowercase extra-size-two">
              <span className="lower-row-text"></span>
            </div>
            <div className="key lower-right lowercase">
              <span className="lower-row-text"></span>
            </div>
            <div className="arrows">
              <div className="key">&#9668;</div>
              <div className="up-down">
                <div className="key">&#9650;</div>
                <div className="key">&#9660;</div>
              </div>
              <div className="key">&#9658;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
