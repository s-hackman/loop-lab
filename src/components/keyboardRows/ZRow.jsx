import React from "react";
import useSound from "use-sound";
import { useEffect, useCallback } from "react";

const ZRow = () => {
  const tableSound = {
    z: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fairhorn.mp3?alt=media&token=79b431c9-ae99-4cbc-9b84-fc2306bbfd27",
    x: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fallthehits.mp3?alt=media&token=2cef3295-477a-486c-a0c1-8fb57626a8c7",
    c: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Faweyeah.mp3?alt=media&token=2fb28322-7454-48a6-8065-b3e61da0a4b7",
    v: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fcongratulations.mp3?alt=media&token=45b5dc7a-349b-4d79-b417-e312aff23ac0",
    b: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fcops.mp3?alt=media&token=209d0f2b-ed34-40b4-a332-0d92da7585fd",
    n: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Fdamnson.mp3?alt=media&token=efe63053-f327-4f83-937f-bfcf6255c646",
    m: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2Felephant.mp3?alt=media&token=a37ecb2c-f027-4529-a5ae-1abf70bbc44a",
  };
  const [playZ] = useSound(tableSound["z"], {
    volume: 0.5,
  });
  const [playX] = useSound(tableSound["x"], {
    volume: 0.5,
  });
  const [playC] = useSound(tableSound["c"], {
    volume: 0.5,
  });
  const [playV] = useSound(tableSound["v"], {
    volume: 0.5,
  });
  const [playB] = useSound(tableSound["b"], {
    volume: 0.5,
  });
  const [playN] = useSound(tableSound["n"], {
    volume: 0.5,
  });
  const [playM] = useSound(tableSound["m"], {
    volume: 0.5,
  });

  const handleClickZRow = (key) => {
    if (key === "Z") {
      playZ();
    } else if (key === "X") {
      playX();
    } else if (key === "C") {
      playC();
    } else if (key === "V") {
      playV();
    } else if (key === "B") {
      playB();
    } else if (key === "N") {
      playN();
    } else if (key === "M") {
      playM();
    }
  };

  const onKeyPressZRow = useCallback((event) => {
    if (event.key === "z") {
      playZ();
    } else if (event.key === "x") {
      playX();
    } else if (event.key === "c") {
      playC();
    } else if (event.key === "v") {
      playV();
    } else if (event.key === "b") {
      playB();
    } else if (event.key === "n") {
      playN();
    } else if (event.key === "m") {
      playM();
    }
  });
  useEffect(() => {
    // attach the event listener
    window.addEventListener("keydown", onKeyPressZRow);
    // remove the event listener
    return () => {
      window.removeEventListener("keydown", onKeyPressZRow);
    };
  }, [onKeyPressZRow]);

  return (
    <div className="keyboard-row">
      <div className="key double-size lowercase lower-left">
        <span className="lower-row-text"></span>
      </div>
      <div
        className="key activeKey row_z"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        Z
      </div>
      <div
        className="key activeKey row_x"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        X
      </div>
      <div
        className="key activeKey row_c"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        C
      </div>
      <div
        className="key activeKey row_v"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        V
      </div>
      <div
        className="key activeKey row_b"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        B
      </div>
      <div
        className="key activeKey row_n"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        N
      </div>
      <div
        className="key activeKey row_m"
        onClick={(e) => handleClickZRow(e.target.innerText)}
      >
        M
      </div>
      <div className="key"></div>
      <div className="key"></div>
      <div className="key"></div>
      <div className="key double-size lowercase lower-right">
        <span className="lower-row-text"></span>
      </div>
    </div>
  );
};

export default ZRow;
