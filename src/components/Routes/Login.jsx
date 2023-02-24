import { useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase_setup/firebase";
import UserContext from "../../context/userContext";
import "../../styles/login.css";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { setLoginUser, loginUser } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [regMessage, setRegMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setRegMessage("");
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      setRegMessage("invalid email address");
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoginUser(user.user.email);
      console.log(loginUser);
      setLoginMessage("");
      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      setLoginMessage("invalid user information");
      console.log(error.message);
    }
  };

  const logout = async () => {
    setLoginUser(null);
    await signOut(auth);
  };

  return (
    <div className="Login">
      <div>
        <h3> Register User </h3>
        <input
          value={registerEmail}
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          value={registerPassword}
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <div> {regMessage} </div>
        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          value={loginEmail}
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          value={loginPassword}
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <div className=""> {loginMessage} </div>
        <button onClick={login}> Login</button>
      </div>
      {loginUser && (
        <>
          <h4> User Logged In: </h4>
          {loginUser}
          <button onClick={logout}> Sign Out </button>
        </>
      )}
    </div>
  );
}

export default Login;
