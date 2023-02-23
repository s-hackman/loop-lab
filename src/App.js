import "./styles/App.css";
import Keyboard from "./components/Routes/Keyboard";
import Login from "./components/Routes/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainSequencer from "./components/Routes/MainSequencer";
import { PianoComponent } from "./components/Routes/PianoComponent";
import Home from "./components/Home";
import { UserContextProvider } from "./context/userContext";
// import { db } from "./firebase_setup/firebase";
import background from "../src/background_image_sun.jpeg";

function App() {
  return (
    <UserContextProvider>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          maxHeight: "100%",
          height: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/keyboard" element={<Keyboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/sequencer" element={<MainSequencer />}></Route> */}
          <Route path="/piano" element={<PianoComponent />}></Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
