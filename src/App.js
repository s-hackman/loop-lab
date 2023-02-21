import "./styles/App.css";
import Keyboard from "./components/Routes/Keyboard";
import Login from "./components/Routes/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainSequencer from "./components/Routes/MainSequencer";
import { PianoComponent } from "./components/Routes/PianoComponent";
import Home from "./components/Home";
// import { db } from "./firebase_setup/firebase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/keyboard" element={<Keyboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sequencer" element={<MainSequencer />}></Route>
        <Route path="/piano" element={<PianoComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
