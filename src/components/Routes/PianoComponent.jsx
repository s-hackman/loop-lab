import { useEffect, useState } from "react";
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from "../pianoComponents/tone.fn";
import "../../styles/piano.css";
import CircularSlider from "@fseehawer/react-circular-slider";

export const PianoComponent = () => {
  const [keyPressedStyle, setKeyPressedStyle] = useState("");
  const [chorus1, setChorus1] = useState(1);
  const [chorus2, setChorus2] = useState(2.5);
  const [chorus3, setChorus3] = useState(0.5);
  const inputChange1 = (value) => {
    setChorus1(value);
  };
  const inputChange2 = (value) => {
    setChorus2(value);
  };
  const inputChange3 = (value) => {
    setChorus3(value);
  };

  useEffect(() => {
    const choruses = (event) => {
      playNote(event, chorus1, chorus2, chorus3);
      setKeyPressedStyle(event.keyCode);
      setTimeout(() => {
        setKeyPressedStyle('')
      }, 300)
    }
    // attach the event listener
    window.addEventListener("keydown", choruses);
    // remove the event listener
    return () => {
      window.removeEventListener("keydown", choruses);
    };
  }, [playNote, chorus1, chorus2, chorus3]);
  return (
    <div className="pianoContainer">
      <div className="keyboard-info">
        <img id="pianotitle" src="/8bitpiano.png" alt="keyboardtitle"></img>
      </div>
      <div className="piano">
        <div
          className={`white-key ${keyPressedStyle === 65 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playC4(chorus1, chorus2, chorus3);
          }}
        >
          A
        </div>
        <div
          className={`black-key ${keyPressedStyle === 87 ? 'pianoPressed' : ''}`}
          onClick={() => {
            playDb4(chorus1, chorus2, chorus3);
          }}
        >
          W
        </div>
        <div
          className={`white-key ${keyPressedStyle === 83 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playD4(chorus1, chorus2, chorus3);
          }}
        >
          S
        </div>
        <div
          className={`black-key ${keyPressedStyle === 69 ? 'pianoPressed' : ''}`}
          onClick={() => {
            playEb4(chorus1, chorus2, chorus3);
          }}
        >
          E
        </div>
        <div
          className={`white-key ${keyPressedStyle === 68 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playE4(chorus1, chorus2, chorus3);
          }}
        >
          D
        </div>
        <div
          className={`white-key ${keyPressedStyle === 70 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playF4(chorus1, chorus2, chorus3);
          }}
        >
          F
        </div>
        <div
          className={`black-key ${keyPressedStyle === 84 ? 'pianoPressed' : ''}`}
          onClick={() => {
            playGb4(chorus1, chorus2, chorus3);
          }}
        >
          T
        </div>
        <div
          className={`white-key ${keyPressedStyle === 71 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playG4(chorus1, chorus2, chorus3);
          }}
        >
          G
        </div>
        <div
          className={`black-key ${keyPressedStyle === 89 ? 'pianoPressed' : ''}`}
          onClick={() => {
            playAb4(chorus1, chorus2, chorus3);
          }}
        >
          Y
        </div>
        <div
          className={`white-key ${keyPressedStyle === 72 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playA4(chorus1, chorus2, chorus3);
          }}
        >
          H
        </div>
        <div
          className={`black-key ${keyPressedStyle === 85 ? 'pianoPressed' : ''}`}
          onClick={() => {
            playBb4(chorus1, chorus2, chorus3);
          }}
        >
          U
        </div>
        <div
          className={`white-key ${keyPressedStyle === 74 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playB4(chorus1, chorus2, chorus3);
          }}
        >
          J
        </div>
        <div
          className={`white-key ${keyPressedStyle === 75 ? 'pianoPressed' : ''} `}
          onClick={() => {
            playC5(chorus1, chorus2, chorus3);
          }}
        >
          K
        </div>
      </div>
      <section className="sliders">
        <CircularSlider
          width={90}
          knobSize={40}
          labelColor="#005A58"
          knobColor="#005A58"
          progressColorFrom="#6d81ed"
          progressColorTo="#009C9A"
          progressSize={15}
          trackColor="#EEEEEE"
          trackSize={15}
          value={chorus1}
          min={0}
          max={11}
          data={["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4"]}
          dataIndex={0}
          hideLabelValue={true}
          onChange={inputChange1}
        />
        <CircularSlider
          width={90}
          knobSize={40}
          labelColor="#005A58"
          knobColor="#005A58"
          progressColorFrom="#00BFBD"
          progressColorTo="#009C9A"
          progressSize={15}
          trackColor="#EEEEEE"
          trackSize={15}
          value={chorus2}
          min={0}
          max={11}
          data={[
            "0",
            "0.25",
            "0.5",
            "0.75",
            "1",
            "1.25",
            "1.5",
            "1.75",
            "2",
            "2.25",
            "2.5",
            "3",
            "3.25",
            "3.5",
            "3.75",
            "4",
          ]}
          dataIndex={0}
          hideLabelValue={true}
          onChange={inputChange2}
        />
        <CircularSlider
          width={90}
          knobSize={40}
          labelColor="#005A58"
          knobColor="#005A58"
          progressColorFrom="#00BFBD"
          progressColorTo="#009C9A"
          progressSize={15}
          trackColor="#EEEEEE"
          trackSize={15}
          value={chorus3}
          min={0}
          max={11}
          data={[
            "0",
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.7",
            "0.8",
            "0.9",
            "1",
          ]}
          dataIndex={0}
          hideLabelValue={true}
          onChange={inputChange3}
        />
      </section>
    </div>
  );
};
