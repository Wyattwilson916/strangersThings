import React, { useState } from "react";
import { updatePost } from "../api";

const SinglePost = ({ token, post, posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");

  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    const { data } = await updatePost({ title: postTitle }, token, postId);
    console.log(data.post);
    //
    //
    //
    //
    //
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.location.includes('[', 0) ? 'Location: Available upon Request' : `Location: ${post.location}`}</h3>
      <h4>{post.price.includes("$", 0) ? post.price : `$${post.price}`}</h4>
      <h4>{post.willDeliver ? "Will Deliver" : "Will Not Deliver"}</h4> 
      <form
      // Continue working on above line
        onSubmit={(e) => {
          handleSubmit(e, post._id);
        }}
      >
        <input
          placeholder="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button type="submit">Update Title</button>
      </form>
    </div>
  );
};

export default SinglePost;
