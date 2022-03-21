import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Add a 'min' property to password length
  // Make user/pass required
  const onSignUp = async(e) => {
    e.preventDefault();
    console.log(setToken)
    const result = await registerUser(username, password);
    localStorage.setItem("token", await result.data.token);
    const myToken = await result.data.token
    setToken(myToken);
    
  }
    
  return (
    <div>
      <form
      onSubmit={onSignUp}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
