import React from "react";
import useSound from "use-sound";
import { useState, useEffect, useCallback } from "react";

const QRow = () => {
  const soundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/stinger-sound-cmaj7-chord-stab-12534.mp3?alt=media&token=31278a3f-df90-4e2d-9020-b5be9e570f1b";
  const [playbackRate, setPlaybackRate] = useState(1);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.3,
  });
  const table = {
    q: 0.7,
    w: 0.8,
    e: 0.9,
    r: 1,
    t: 1.1,
    y: 1.2,
    u: 1.3,
    i: 1.4,
    o: 1.5,
    p: 1.6,
  };
  const handleClick = (key) => {
    setPlaybackRate(table[key]);
    play();
  };

  const onKeyPress = useCallback(
    (event) => {
      if (event.key === "q") {
        handleClick(event.key);
      } else if (event.key === "w") {
        handleClick(event.key);
      } else if (event.key === "e") {
        handleClick(event.key);
      } else if (event.key === "r") {
        handleClick(event.key);
      } else if (event.key === "t") {
        handleClick(event.key);
      } else if (event.key === "y") {
        handleClick(event.key);
      } else if (event.key === "u") {
        handleClick(event.key);
      } else if (event.key === "i") {
        handleClick(event.key);
      } else if (event.key === "o") {
        handleClick(event.key);
      } else if (event.key === "p") {
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
    <section className="qrow">
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        q
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        w
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        e
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        r
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        t
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        y
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        u
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        i
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        o
      </div>
      <div className="keys" onClick={(e) => handleClick(e.target.innerText)}>
        p
      </div>
    </section>
  );
};

export default QRow;
