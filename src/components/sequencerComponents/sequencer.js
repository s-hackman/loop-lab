import React, { useState, useEffect, useContext } from "react";
import Grid from "./grid";
import * as Tone from "tone";
import PlayerProvider from "./player-provider";
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
  const [playing, setPlaying] = useState(true);
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
      <div className="bpm" style={{ padding: "20px" }}>
        BPM: {bpm}
        <div className="bpm">
          <input
            name="bpm"
            type="range"
            min="50"
            max="240"
            value={bpm}
            onChange={inputChange}
            step="1"
          />
        </div>
      </div>
      <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
      <select name="set-Kit" onChange={(e) => handleSelect(e.target.value)}>
        <option value="0">Kit One</option>
        <option value="1">Kit Two</option>
        <option value="2">Kit Three</option>
        <option value="3">Kit Four</option>
      </select>
      <Grid sequence={sequence} toggleStep={toggleStep} />
      {loginUser && (
        <PresetButton sequence={sequence} setSequence={setSequence} />
      )}
    </>
  );
};

export default Sequencer;
