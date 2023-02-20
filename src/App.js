import "./App.css";
import useSound from "use-sound";
// import { db } from "./firebase_setup/firebase";
import { useState, useEffect, useCallback } from "react";
new AudioContext();

function App() {
  const soundUrl =
    "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/stinger-sound-cmaj7-chord-stab-12534.mp3?alt=media&token=31278a3f-df90-4e2d-9020-b5be9e570f1b";

  const [playbackRate, setPlaybackRate] = useState(1);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
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
      console.log(`Key pressed: ${event.key}`);
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

  console.log(playbackRate, "pbrate");

  return (
    <div className="App">
      <section className="keyboard">
        <section className="drums">
          <div className="keys">1</div>
          <div className="keys">2</div>
          <div className="keys">3</div>
          <div className="keys">4</div>
          <div className="keys">5</div>
          <div className="keys">6</div>
          <div className="keys">7</div>
          <div className="keys">8</div>
          <div className="keys">9</div>
          <div className="keys">0</div>
        </section>
        <section className="qrow">
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            q
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            w
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            e
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            r
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            t
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            y
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            u
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            i
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            o
          </div>
          <div
            className="keys"
            onClick={(e) => handleClick(e.target.innerText)}
          >
            p
          </div>
        </section>
        <br></br>
        <section className="arow">
          <div className="keys">a</div>
          <div className="keys">s</div>
          <div className="keys">d</div>
          <div className="keys">f</div>
          <div className="keys">g</div>
          <div className="keys">h</div>
          <div className="keys">j</div>
          <div className="keys">k</div>
          <div className="keys">l</div>
        </section>
        <br></br>
        <section className="zrow">
          <div className="keys">z</div>
          <div className="keys">x</div>
          <div className="keys">c</div>
          <div className="keys">v</div>
          <div className="keys">b</div>
          <div className="keys">n</div>
          <div className="keys">m</div>
        </section>
      </section>
    </div>
  );
}

export default App;
