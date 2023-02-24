import React from "react";
import useSound from "use-sound";
import { useEffect, useCallback } from "react";

const ZRow = () => {
  const tableSound = {
    z: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2FHouse%20SFX%2003.wav?alt=media&token=9d3b2e91-4b1e-455f-800b-88c667a233d8",
    x: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2FHouse%20SFX%2004.wav?alt=media&token=0d612072-58da-491c-bc5d-cf6e7e9881f2",
    c: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2FHouse%20SFX%2006.wav?alt=media&token=3402bcc5-7889-47ab-88a2-5e4dce7c5587",
    v: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2FHouse%20SFX%2011.wav?alt=media&token=e7a216a2-0383-4322-b265-3fa8dd93ded4",
    b: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/soundfx%2FPanned%20Reverse%20Cymbl.wav?alt=media&token=d6121908-d2b4-4229-b789-796b82081507",
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
