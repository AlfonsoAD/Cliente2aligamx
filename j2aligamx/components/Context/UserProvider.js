import React, { useState, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";

var token = "";
const userData = { userId: "", userName: "", userEmail: "" };

const userContext = React.createContext(userData);

export const captureToken = (tk) => {
  token = tk;
};

export function useUserContext() {
  return useContext(userContext);
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    userEmail: "",
  });

  useEffect(() => {
    dataUser();
  }, []);

  const dataUser = () => {
    let decode = jwt_decode(token);
    setUser({
      userId: decode.id,
      userName: decode.name,
      userEmail: decode.email,
    });
  };

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export default UserProvider;
