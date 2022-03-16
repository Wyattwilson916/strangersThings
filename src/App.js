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

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken !== "") {
      setToken(localStorageToken);
    }
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const myInfo = await myData(token);
        console.log(myInfo, '!!')
        setUserPosts(myInfo.data.posts);
        setUserMessages(myInfo.data.messages);
        setCurrentUsername(myInfo.data.username);
        setUserId(myInfo.data._id);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, [token]);
   console.log(userPosts, 'userPosts', userMessages, 'userMessages', userId, 'userId', currentUsername, 'currentUsername');

  return (
    <div>
      <SignUp setToken={setToken} />
      <LoginStatus setToken={setToken} />
      <Posts token={token} userObj={{userPosts, userMessages, currentUsername, userId}}/>
    </div>
  );
}

export default App;
