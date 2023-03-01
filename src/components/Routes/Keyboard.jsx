import React from "react";
import ZRow from "../keyboardRows/ZRow";
import "../../styles/keyboard.css";
import Row from "../keyboardRows/Row";

const Keyboard = () => {
  const numRowSoundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Shaker%20(C).wav?alt=media&token=e678ea30-c674-47ad-b234-c93110a2ada8";
  const qRowSoundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/stinger-sound-cmaj7-chord-stab-12534.mp3?alt=media&token=31278a3f-df90-4e2d-9020-b5be9e570f1b";
  const aRowSoundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/horn-release_C_major.wav?alt=media&token=82086ca0-0645-40f6-b34e-24567c4b28fd";

  const aRowTable = {
    a: 0.491,
    s: 0.552,
    d: 0.621,
    f: 0.658,
    g: 0.741,
    h: 0.829,
    j: 0.932,
    k: 0.987,
    l: 1.105,
  };
  const numRowTable = {
    _1: 0.491 * 2,
    _2: 0.552 * 2,
    _3: 0.621 * 2,
    _4: 0.658 * 2,
    _5: 0.741 * 2,
    _6: 0.829 * 2,
    _7: 0.932 * 2,
    _8: 0.987 * 2,
    _9: 1.105 * 2,
    _0: 1.246 * 2,
  };
  const qRowTable = {
    q: 0.491,
    w: 0.552,
    e: 0.621,
    r: 0.658,
    t: 0.741,
    y: 0.829,
    u: 0.932,
    i: 0.987,
    o: 1.105,
    p: 1.246,
  };

  return (
    <>
      <section className="keyboard-info">
        <img id="keytitle" src="/Keyboardsampler.png" alt="keyboardtitle"></img>
      </section>

      <div className="container">
        <div>
          <div className="keyboard-row">
            <div className="key"></div>
            <Row table={numRowTable} soundUrl={numRowSoundUrl} />
            <div className=" key "></div>
            <div className="key"></div>
            <div className="key extra-size lowercase lower-right">
              <span className="lower-row-text"></span>
            </div>
          </div>
          <div className="keyboard-row">
            <div className="key extra-size lowercase lower-left">
              <span className="lower-row-text"></span>
            </div>
            <Row table={qRowTable} soundUrl={qRowSoundUrl} />
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
          <div className="keyboard-row">
            <div className="key lowercase lower-left extra-size-two">
              <span className="lower-row-text"></span>
            </div>
            <Row table={aRowTable} soundUrl={aRowSoundUrl} />
            <div className="key"></div>
            <div className="key"></div>
            <div className="key extra-size-two lowercase lower-right">
              <span className="lower-row-text"></span>
            </div>
          </div>
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
