import React from "react";
import useSound from "use-sound";
import { useState, useEffect, useCallback } from "react";

const ARow = () => {
  const soundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fpiano-c_C_major.wav?alt=media&token=a0f8481e-c58f-4322-a822-705be76d285f";
  const [playbackRate, setPlaybackRate] = useState(1);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.3,
  });
  const table = {
    a: 0.4,
    s: 0.6,
    d: 0.8,
    f: 1,
    g: 1.2,
    h: 1.4,
    j: 1.6,
    k: 1.8,
    l: 2,
  };
  const handleClick = (key) => {
    setPlaybackRate(table[key]);
    play();
  };

  const onKeyPress = useCallback(
    (event) => {
      if (event.key === "a") {
        handleClick(event.key);
      } else if (event.key === "s") {
        handleClick(event.key);
      } else if (event.key === "d") {
        handleClick(event.key);
      } else if (event.key === "f") {
        handleClick(event.key);
      } else if (event.key === "g") {
        handleClick(event.key);
      } else if (event.key === "h") {
        handleClick(event.key);
      } else if (event.key === "j") {
        handleClick(event.key);
      } else if (event.key === "k") {
        handleClick(event.key);
      } else if (event.key === "l") {
        handleClick(event.key);
      }
    },
    [playbackRate]
  );
  useEffect(() => {
    // attach the event listener
    window.addEventListener("keydown", onKeyPress);
    // remove the event listener
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <div className="keyboard-row">
      <div className="key lowercase lower-left extra-size-two">
        <span className="lower-row-text"></span>
      </div>
      <div
        className="key row_a"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        A
      </div>
      <div
        className="key row_s"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        S
      </div>
      <div
        className="key row_d"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        D
      </div>
      <div
        className="key row_f"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        F
      </div>
      <div
        className="key row_g"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        G
      </div>
      <div
        className="key row_h"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        H
      </div>
      <div
        className="key row_j"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        J
      </div>
      <div
        className="key row_k"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        K
      </div>
      <div
        className="key row_l"
        onClick={(e) => handleClick(e.target.innerText)}
      >
        L
      </div>
      <div className="key"></div>
      <div className="key"></div>
      <div className="key extra-size-two lowercase lower-right">
        <span className="lower-row-text"></span>
      </div>
    </div>
  );
};

export default ARow;
