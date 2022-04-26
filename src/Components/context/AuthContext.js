import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    fetch("https://reqres.in/api/login",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({"email":email,"password":password})
    })
    .then(res=>res.json())
    .then(data=>setToken(data.token))
    .catch(error=>console.log(error));
    console.log(token);
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
