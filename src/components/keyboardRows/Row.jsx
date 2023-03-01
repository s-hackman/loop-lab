import React from "react";
import useSound from "use-sound";
import { useState, useEffect, useCallback } from "react";

const Row = ({ table, soundUrl }) => {
  const [keyPressedStyle, setKeyPressedStyle] = useState("");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const validKeys = Object.keys(table).map((key) => key.replace("_", ""));

  const handleClick = (key) => {
    if (key.match(/\d/g)) {
      setPlaybackRate(table["_" + key]);
      play();
      setKeyPressedStyle(key);
      setTimeout(() => {
        setKeyPressedStyle("");
      }, 400);
    } else {
      setPlaybackRate(table[key.toLowerCase()]);
      play();
      setKeyPressedStyle(key);
      setTimeout(() => {
        setKeyPressedStyle("");
      }, 400);
    }
  };

  const onKeyPress = useCallback(
    (event) => {
      if (validKeys.includes(event.key)) {
        handleClick(event.key);
      }
    },
    [playbackRate]
  );
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);
  return validKeys.map((key) => {
    return (
      <div
        key={key}
        className={`${
          keyPressedStyle === key ? "keyPressed" : ""
        } row_${key} key activeKey `}
        onClick={(e) => handleClick(e.target.innerText)}
      >
        {key.toUpperCase()}
      </div>
    );
  });
};

export default Row;
