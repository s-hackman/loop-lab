import React, { useState, useEffect } from "react";
import Grid from "./grid";
import * as Tone from "tone";
import PlayerProvider from "./player-provider";
import PlayButton from "./play-button";

const steps = 16;
const initialCellState = { triggered: false, activated: false };
const lineMap = ["BD", "CP", "CH", "OH"];
const initialState = [
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
];

const Sequencer = ({ player }) => {
  const [sequence, setSequence] = useState(initialState);
  const [playing, setPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

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
          player.get(lineMap[i]).start();
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
    console.log(e, "E");
    setBpm(e.target.value);
  };
  return (
    <>
      <div className="bpm" style={{ padding: "20px" }}>
        BPM: {bpm}
        <div className="gain-control">
          <input
            name="gainValue"
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
      <Grid sequence={sequence} toggleStep={toggleStep} />
    </>
  );
};

export default Sequencer;
