// check local storage for token
// if token present display logged in
// else display login or sign up
//
// if login info doesn't match api, display incorrect user/pass
//
// if sign up info already exists, display account already exists
//
// Logout button appears when logged in

import React, { useEffect, useState } from "react";
import { userLogin } from "../api";

const LoginStatus = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    console.log(result);
    localStorage.setItem("token", result.data.token);
    setLoginStatus(true)
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token"); // Need to update login state
    setLoginStatus(false)
  };

  useEffect(() => {

  }, [loginStatus])

  // if(loggedIn === true){
  //   hide Login, show logout
  // }

  return (
    <div>
      {loginStatus ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            value={password}
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginStatus;
