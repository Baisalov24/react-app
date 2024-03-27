import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PostList from "./PostList";
import MyButton from "./UI/button/MyButton";

const PostForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    setData([...data, newPost]);
    setPost({ title: "", body: "" })
  }

  return (
    <div>
      <input
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="type title"
        value={post.title}
      />
      <input
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="type text"
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>

      <PostList data={data} setData={setData} />
    </div>
  );
};

export default PostForm;
