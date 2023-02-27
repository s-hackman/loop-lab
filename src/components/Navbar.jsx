import { Link } from "react-router-dom";
import pianoSVG from "../svg/piano.svg";
import keyboardSVG from "../svg/keyboard.svg";
import sequencerSVG from "../svg/sequencer.svg";
import homeSVG from "../svg/home.svg";
import userSVG from "../svg/user.svg";
import "../styles/navbar.css";
import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Navbar = () => {
  const { loginUser } = useContext(UserContext);

  return (
    <nav>
      <img className="loop_logo" src="/LoopLab.gif" alt="logo" />
      <div className="linkContainer">
        <Link to="/login">
          <img src={userSVG} alt="login" className="navbar-image" />
          {!loginUser ? (
            <p id="username">Log in to save sounds...</p>
          ) : (
            <p id="username">{loginUser}</p>
          )}
        </Link>
        <Link to="/">
          <img src={homeSVG} alt="go home" className="navbar-image" />
          Home
        </Link>
        <Link to="/sequencer">
          <img
            src={sequencerSVG}
            alt="sequencer Link"
            className="navbar-image"
          />
          Sequencer
        </Link>
        <Link to="/keyboard">
          <img src={keyboardSVG} alt="keyboard Link" className="navbar-image" />
          Keyboard
        </Link>
        <Link to="/piano">
          <img src={pianoSVG} alt="piano Link" className="navbar-image" />
          Piano
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
