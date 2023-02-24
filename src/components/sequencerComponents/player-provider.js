import React, { useState, useEffect } from "react";
import * as Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: "/Kick_17.wav",
        CP: "/Snare_7.wav",
        OH: "/Hihat_open_1.wav",
        CH: "/Hihat_1_closed.wav",
        BD1: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Kick.wav?alt=media&token=81d7e5ac-3ba7-4bec-98da-176adc5bbdad",
        CP1: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Snare.wav?alt=media&token=f478f672-316a-4da2-a135-19649627b658",
        OH1: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Hihat_open_2.wav?alt=media&token=27cec455-c5ff-4bb7-b7e3-9489aff927ba",
        CH1: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Hihat2_closed.wav?alt=media&token=44a8aa6c-8263-4ee9-84b0-843ffdc5efd0",
        BD2: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/BD%2FKick%20-%201.wav?alt=media&token=9b20d20b-43e5-4c70-9fb2-0f203eba1815",
        CP2: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Snare2.wav?alt=media&token=a3e26609-da47-4693-81e7-e3ea94f10bd7",
        OH2: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Hihat_open.wav?alt=media&token=678e72cf-df87-4bd8-bda7-2f1dbeee5709",
        CH2: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Hihat3_closed.wav?alt=media&token=b27da387-d18e-470a-9acc-17869946e180",
        BD3: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/BD%2FKick%20-%2065.wav?alt=media&token=5623646f-401d-4eab-9357-68a08e5b92fc",
        CP3: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Snare4.wav?alt=media&token=8143e202-3e37-4c35-b773-e1797d209128",
        OH3: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Clap.wav?alt=media&token=5f1c55f6-3f7d-45ca-857e-1433155ca498",
        CH3: "https://firebasestorage.googleapis.com/v0/b/fir-with-react-c4cc3.appspot.com/o/Cow.wav?alt=media&token=a545e4fe-87f0-4e83-8d4c-afc4422b9ffe",
      },
      () => {
        setPlayer(player);
      }
    ).toMaster();
  }, []);

  return children({ player });
};

export default PlayerProvider;
