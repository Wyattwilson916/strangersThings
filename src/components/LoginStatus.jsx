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
  const [zero, setZero] = useState("subm");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setZero(1);
          const result = await userLogin(username, password);
          console.log(result);
          localStorage.setItem("token", result.data.token);
          const myToken = localStorage.getItem("token");
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
        {/* <button type="submit">Login</button> */}
      </form>
      {<button type="submit">Login</button> ? (
        zero
      ) : (
        <button type="submit">Login</button>
      )}
    </div>
  );
};

export default LoginStatus;
