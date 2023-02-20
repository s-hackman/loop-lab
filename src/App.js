import "./App.css";
import Keyboard from "./components/Keyboard";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import MainSequencer from "./components/MainSequencer";

// import { db } from "./firebase_setup/firebase";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Keyboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sequencer" element={<MainSequencer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
