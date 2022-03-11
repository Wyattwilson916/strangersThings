import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        onSubmit={async(e) => {
          e.preventDefault();
          const result = await registerUser(username, password)
          console.log(result.data.token)
          localStorage.setItem('token', result.data.token)
          const myToken = localStorage.getItem('token')
        }}
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

export default SignUp