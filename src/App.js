import React from "react";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import SignUp from "./components/SignUp";
import LoginStatus from "./components/LoginStatus";
import { myData } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [currentUsername, setCurrentUsername] = useState("");
  const [userId, setUserId] = useState("");

  async function fetchUserData() {
    try {
      const myInfo = await myData();

      setUserPosts(myInfo.data.posts);
      setUserMessages(myInfo.data.messages);
      setCurrentUsername(myInfo.data.username);
      setUserId(myInfo.data._id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken !== "") {
      setToken(localStorageToken);
    }
  }, [token]);

  useEffect(() => {
    fetchUserData();
  }, [token]);
  console.log(
    userPosts,
    userMessages,
    userId,
    currentUsername,
    "!!!!!!!!!!!!!!"
  );
  return (
    <div>
      <SignUp setToken={setToken} />
      <LoginStatus setToken={setToken} />
      <Posts token={token} />
    </div>
  );
}

export default App;
