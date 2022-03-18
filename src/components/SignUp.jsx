import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Add a 'min' property to password length
  // Make user/pass required
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const myToken = localStorage.getItem("token");
          console.log(myToken);

          const result = await registerUser(username, password);
          console.log(result);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          localStorage.setItem("token", myToken);
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
