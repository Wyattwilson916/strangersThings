import React from "react";
import { useEffect, useState } from "react";
import SignUp from "./components/signUp";
function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <div>
      <SignUp setToken/>
    </div>
  );
}
export default App;
