import React from "react";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import SignUp from "./components/SignUp";
import LoginStatus from "./components/LoginStatus";
function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken !== "") {
      setToken(localStorageToken);
    }
  }, [token]);

  return (
    <div>
      <SignUp setToken={setToken} />
      <LoginStatus setToken={setToken} />
      <Posts token={token} />
    </div>
  );
}

export default App;
