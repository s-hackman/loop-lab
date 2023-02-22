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
  const { user } = useContext(UserContext);
  console.log(loginUser);

  return (
    <nav>
      <h2 className="logo">Loop Lab</h2>
      <div className="linkContainer">
        <Link to="/login">
          <img src={userSVG} alt="login" />
          {!loginUser ? (
            <p id="username">Log in to save sounds...</p>
          ) : (
            <p>{loginUser}</p>
          )}
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
      </div>
    </nav>
  );
};
export default Navbar;
