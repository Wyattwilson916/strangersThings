import React, { useState, useEffect } from "react";
import { createPost } from "../api";

const CreatePost = ({ token, setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const authenticated = localStorage.getItem("token") ? true : false;  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postDetailsObj = { title, description, location, price, willDeliver };
    console.log(postDetailsObj);
    const token = localStorage.getItem("token");
    const response = await createPost(postDetailsObj, token);
    console.log(response);
    const newPost = response.data.post;
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
  }, [token])
  
  return (
    <div>
      {authenticated === true ? (
        <>
          <h4>Create a Post</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="location"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
            <label>Will Deliver?</label>
            <input
              type="checkbox"
              value={willDeliver}
              onChange={(e) => {
                setWillDeliver(!willDeliver);
              }}
            />
            <button type="submit">Create Post</button>
          </form>
        </>
      ) : 
      <h3>Please Login or Sign Up to Create a Listing</h3>
      }
    </div>
  );
};

export default CreatePost;
