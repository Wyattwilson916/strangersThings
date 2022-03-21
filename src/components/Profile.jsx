// Have a message form, returning post form Single Post to make the form

//Bring to single post and pass the message form the post Id
import React, { useState, useEffect } from "react";
import { myData } from "../api";

const Profile = ({ postId, post }) => {
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

  return (
    <div>
      <h2>{currentUsername}'s Profile </h2>
      <h4>{userMessages.length ? `Your Messages${userMessages}`: 'Message inbox empty'}</h4>
    </div>
  );
  // <Message postId={post._id} />
};

export default Profile;
