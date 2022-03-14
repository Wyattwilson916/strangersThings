import React from "react";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import SignUp from "./components/signUp";
import Posts from "./components/Posts";
function App() {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if(localStorageToken !== ''){
      setToken(localStorageToken)
    };
  }, [token]);

  return (
    <div>
      <SignUp setToken={setToken} />
      <Posts token={token} />
      <CreatePost />
    </div>
  );
}

export default App;
