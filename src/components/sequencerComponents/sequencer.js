import React, { useState, useEffect, useContext } from "react";
import Grid from "./grid";
import PlayButton from "./play-button";
import PresetButton from "../presets/PresetButton";
import UserContext from "../../context/userContext";

const steps = 16;
const initialCellState = { triggered: false, activated: false };
const lineMap = [
  ["BD", "CP", "CH", "OH"],
  ["BD1", "CP1", "CH1", "OH1"],
  ["BD2", "CP2", "CH2", "OH2"],
  ["BD3", "CP3", "CH3", "OH3"],
];
const initialState = [
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
];

const Sequencer = ({ player }) => {
  const [kit, setKit] = useState(lineMap[0]);
  const [sequence, setSequence] = useState(initialState);
  const [playing, setPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const { loginUser } = useContext(UserContext);

  const toggleStep = (line, step) => {
    const sequenceCopy = [...sequence];
    const { triggered, activated } = sequenceCopy[line][step];
    sequenceCopy[line][step] = { triggered, activated: !activated };
    setSequence(sequenceCopy);
  };

  const nextStep = (time) => {
    for (let i = 0; i < sequence.length; i++) {
      for (let j = 0; j < sequence[i].length; j++) {
        const { triggered, activated } = sequence[i][j];
        sequence[i][j] = { activated, triggered: j === time };
        if (triggered && activated) {
          player.get(kit[i]).start();
        }
      }
    }
    setSequence(sequence);
  };

  useEffect(() => {
    const beatDuration = (15 / bpm) * 1000;
    const timer = setTimeout(() => {
      if (playing) {
        setCurrentStep((currentStep + 1) % steps);
        nextStep(currentStep);
      }
    }, beatDuration);
    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, playing]);

  const [bpm, setBpm] = useState(120);

  const inputChange = (e) => {
    setBpm(e.target.value);
  };

  const handleSelect = (key) => {
    setKit(lineMap[key]);
  };
  return (
    <>
      <section className="drumcontainer">
        <img
          id="drumtitle"
          className="keyboard-info"
          src="/drumsequencer.png"
          alt="keyboardtitle"
        ></img>
        <div className="bpm">
          <strong> BPM: {bpm}</strong>
          <input
            className="bpm-slider"
            name="bpm"
            type="range"
            min="50"
            max="240"
            value={bpm}
            onChange={inputChange}
            step="1"
          />
        </div>
        <Grid sequence={sequence} toggleStep={toggleStep} />
        <div className="sequencerOptions">
          <select
            className="options"
            name="set-Kit"
            onChange={(e) => handleSelect(e.target.value)}
          >
            <option value="0">Techno</option>
            <option value="1">Retro</option>
            <option value="2">Pop</option>
            <option value="3">Drum & Base</option>
          </select>
          <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
          {loginUser && (
            <PresetButton
              sequence={sequence}
              setSequence={setSequence}
              setPlaying={setPlaying}
            /> 
            )}
        </div>
      </section>
    </>
  );
};

export default Sequencer;
