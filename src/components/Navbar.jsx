import { Link } from "react-router-dom";
import pianoSVG from "../svg/piano.svg";
import keyboardSVG from "../svg/keyboard.svg";
import sequencerSVG from "../svg/sequencer.svg";
import homeSVG from "../svg/home.svg";
import userSVG from "../svg/user.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>Loop Lab</h2>
      <Link to="/login">
        <img src={userSVG} alt="login" />
        <p id="username">Log in to save sounds...</p>
      </Link>
      <Link to="/">
        <img src={homeSVG} alt="go home" />
        Home
      </Link>
      <Link to="/sequencer">
        <img src={sequencerSVG} alt="sequencer Link" />
        Sequencer
      </Link>
      <Link to="/keyboard">
        <img src={keyboardSVG} alt="keyboard Link" />
        Keyboard
      </Link>
      <Link to="/piano">
        <img src={pianoSVG} alt="piano Link" />
        Piano
      </Link>
    </nav>
  );
};
export default Navbar;
