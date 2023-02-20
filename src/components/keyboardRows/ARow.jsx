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
    <section className="arow">
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        a
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        s
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        d
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        f
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        g
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        h
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        j
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        k
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        l
      </div>
    </section>
  );
};

export default ARow;
