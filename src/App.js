import React from "react";
import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((info) => setPosts(info));
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div>
      <PostForm create={createPost} />
      <PostList posts={posts} title={"List of Posts"} remove={removePost} />
    </div>
  );
}

export default App;
