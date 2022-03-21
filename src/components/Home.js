import React from "react";
import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import SignUp from "./SignUp";
import LoginStatus from "./LoginStatus";
import { myData } from "../api";

//    make sure to include: Make a navbar inside. Own component and create routes inside of our routes

function Home() {
  const [token, setToken] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [currentUsername, setCurrentUsername] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken !== "") {
      setToken(localStorageToken);
      async function fetchUserData() {
        console.log(token);
        try {
          const myInfo = await myData(localStorageToken);

          setUserPosts(myInfo.data.posts);
          setUserMessages(myInfo.data.messages);
          setCurrentUsername(myInfo.data.username);
          setUserId(myInfo.data._id);
        } catch (error) {
          console.log(error);
        }
      }
      fetchUserData();
    }
  }, []);

  useEffect(() => {}, [token]);

  return (
    <div>
      <Posts
        token={token}
        userObj={{ userPosts, userMessages, currentUsername, userId }}
      />
      {/* <h1> Welcome {userName}</h1> */}
    </div>
  );
}

export default Home;
