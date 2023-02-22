import { createContext, useState } from "react";
const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <UserContext.Provider value={{ loginUser, setLoginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
