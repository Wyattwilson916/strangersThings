// check local storage for token
// if token present display logged in
// else display login or sign up
//
// if login info doesn't match api, display incorrect user/pass
//
// if sign up info already exists, display account already exists
//
// Logout button appears when logged in

import React, { useState } from "react";
import { userLogin } from "../api";

const LoginStatus = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    console.log(result);
    localStorage.setItem("token", result.data.token);
    const myToken = localStorage.getItem("token");
  };

  const handleLogout = async (e, token) => {
    e.preventDefault();
    localStorage.removeItem(token);
  };

  // if(login === true){
  //   hide Login, show logout
  // }

  return (
    <div>
      {localStorage.getItem('token') ? (
        <button onClick={() => handleLogout(e, token)}>Logout</button>
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
