//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react
import React, { useState, useContext, useEffect } from "react";
//Libreria para decodificar token
import jwt_decode from "jwt-decode";

var token = "";
const userData = { userId: "", userName: "", userEmail: "" };

const userContext = React.createContext(userData);

// export const captureToken = (accessTk) => {
//   accessTk;
// };

export function useUserContext() {
  return useContext(userContext);
}

const UserProvider = ({ children }) => {
  // const [myToken, setMyToken] = useState(token);
  const [user, setUser] = useState({
    userId: "",
    userName: "defaultname",
    userEmail: "defaultname@sdf",
  });

  useEffect(() => {
    var token = localStorage.getItem("accessToken");
    dataUser(token);
  }, []);

  const dataUser = (token) => {
    if (token != "" && token != null && token != undefined) {
      let decode = jwt_decode(token);
      setUser({
        userId: decode.id,
        userName: decode.name,
        userEmail: decode.email,
      });
    } else {
      setUser({
        userId: "a",
        userName: "hola",
        userEmail: "asa@aad",
      });
    }
  };

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export default UserProvider;
