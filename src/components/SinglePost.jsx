import React, { useState } from "react";
import { updatePost, deletePost } from "../api";

const SinglePost = ({ token, post, posts, setPosts, userObj }) => {
  const [postTitle, setPostTitle] = useState("");
    // console.log(userObj)    
  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    const { data } = await updatePost({ title: postTitle }, token, postId);
    console.log(data.post);
    const filteredPosts = posts.filter((post) => {
      return post._id !== data.post._id;
    });
    const newArray = [...filteredPosts, data.post];
    setPosts(newArray);
  };

  const handleDelete = async (token, postId) => {
    const data = await deletePost(token, postId);
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filteredPosts);
  };

  // console.log('User obj in single post!@#$%^&', userObj )
  // console.log('post!!!!', post)

  const editInfo = (
    <>
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
      <button onClick={() => handleDelete(token, post._id)}>Delete Post</button>
    </>
  );

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>
        {post.location.includes("[", 0)
          ? "Location: Available upon Request"
          : `Location: ${post.location}`}
      </h3>
      <h4>{post.price.includes("$", 0) ? post.price : `$${post.price}`}</h4>
      <h4>{post.willDeliver ? "Will Deliver" : "Will Not Deliver"}</h4>
      {post.author.username === userObj.currentUsername ? editInfo : null}
    </div>
  );
};

export default SinglePost;
