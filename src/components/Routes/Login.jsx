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
import { useNavigate } from 'react-router-dom';

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { setLoginUser, loginUser } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [regMessage, setRegMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [regClassName, setRegClassName] = useState('');
  const [loginClassName, setLoginClassName] = useState('');
  const [passwordRegMessage, setPasswordRegMessage] = useState('');
  const [passwordRegClassName, setPasswordRegClassName] = useState('');
  const [passwordLoginMessage, setPasswordLoginMessage] = useState('');
  const [passwordLoginClassName, setPasswordLoginClassName] = useState('');

  let navigate = useNavigate();

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
      setRegMessage("");
      setRegisterPassword('');
      setRegisterEmail('');
      setRegMessage("your account has been created");
      setLoginUser(user.user.email);
      navigate("/");
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        setPasswordRegMessage('Password should be at least 6 characters')
        setPasswordRegClassName('invalidInfo')
      } else {
        setRegMessage("invalid email address");
        setRegClassName('invalidInfo');
      }
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
      setLoginMessage("");
      setLoginEmail('');
      setLoginMessage('');
      navigate("/");
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setPasswordLoginMessage('wrong password')
        setPasswordLoginClassName('invalidInfo')
      } else {
        setLoginMessage("invalid user information");
        setLoginClassName('invalidInfo');
      }
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
          type='password'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <div className={passwordRegClassName}>{passwordRegMessage}</div>
        <div className={regClassName}> {regMessage} </div>
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
          type='password'
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <div className={passwordLoginClassName}>{passwordLoginMessage}</div>
        <div className={loginClassName}> {loginMessage} </div>
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
