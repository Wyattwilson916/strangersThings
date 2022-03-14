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
      <form
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
