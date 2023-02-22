import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase_setup/firebase";
const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;

    if (user !== null) {
      const uid = user.uid;

      setUser(auth.currentUser.email);
      setLoginUser(auth.currentUser.email);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, loginUser, setLoginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
