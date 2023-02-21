import Sequencer from "../sequencerComponents/sequencer.js";
import PlayerProvider from "../sequencerComponents/player-provider.js";
import "../../styles/sequencer.css";
const MainSequencer = () => {
  return (
    <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
  );
};

export default MainSequencer;
