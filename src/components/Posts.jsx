import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import { fetchPosts } from "../api";
import CreatePost from "./CreatePost";

const Posts = ({ token, userObj }) => {
  const [posts, setPosts] = useState([]);  
  console.log(userObj, '!@#$%^&*()')

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      const newPosts = result.data.posts;
      setPosts(newPosts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <CreatePost posts={posts} setPosts={setPosts} />
      {posts.map((post, i) => {
        return (
          <SinglePost
            key={i}
            post={post}
            token={token}
            posts={posts}
            setPosts={setPosts}
            userObj={userObj}
          />
        );
      })}
    </div>
  );
};

export default Posts;
