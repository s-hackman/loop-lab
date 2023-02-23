import React from "react";
import useSound from "use-sound";
import { useState, useEffect, useCallback } from "react";

const NumRow = () => {
  // Base
  const baseUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Shaker%20(C).wav?alt=media&token=e678ea30-c674-47ad-b234-c93110a2ada8";
  const [playbackRateBase, setPlaybackRateBase] = useState(1);
  const [playBase] = useSound(baseUrl, {
    playbackRate: playbackRateBase,
    volume: 0.2,
  });
  const tableBase = {
    1: 0.7,
    2: 0.8,
    3: 0.9,
    4: 1,
    5: 1.1,
    6: 1.2,
    7: 1.3,
    8: 1.4,
    9: 1.5,
    0: 1.6,
  };
  const handleClickBase = (key) => {
    setPlaybackRateBase(tableBase[key]);
    playBase();
  };

  //Key Press
  const onKeyPress = useCallback(
    (event) => {
      if (event.key === "1") {
        handleClickBase(event.key);
      } else if (event.key === "2") {
        handleClickBase(event.key);
      } else if (event.key === "3") {
        handleClickBase(event.key);
      } else if (event.key === "4") {
        handleClickBase(event.key);
      } else if (event.key === "5") {
        handleClickBase(event.key);
      } else if (event.key === "6") {
        handleClickBase(event.key);
      } else if (event.key === "7") {
        handleClickBase(event.key);
      } else if (event.key === "8") {
        handleClickBase(event.key);
      } else if (event.key === "9") {
        handleClickBase(event.key);
      } else if (event.key === "0") {
        handleClickBase(event.key);
      }
    },
    [playbackRateBase]
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
      <div className="key"></div>
      <div
        className=" key activeKey num-row1"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        1
      </div>
      <div
        className=" key activeKey num-row2"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        2
      </div>
      <div
        className=" key activeKey num-row3"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        3
      </div>
      <div
        className=" key activeKey num-row4"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        4
      </div>
      <div
        className=" key activeKey num-row5"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        5
      </div>
      <div
        className=" key activeKey num-row6"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        6
      </div>
      <div
        className=" key activeKey num-row7"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        7
      </div>
      <div
        className=" key activeKey num-row8"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        8
      </div>
      <div
        className=" key activeKey num-row9"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        9
      </div>
      <div
        className=" key activeKey num-row0"
        onClick={(e) => handleClickBase(e.target.innerText)}
      >
        0
      </div>
      <div className=" key "></div>
      <div className="key"></div>
      <div className="key extra-size lowercase lower-right">
        <span className="lower-row-text"></span>
      </div>
    </div>
  );
};

export default NumRow;
