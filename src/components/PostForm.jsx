import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({data, setData}) => {
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
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="type title"
        value={post.title}
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="type text"
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </div>
  );
};

export default PostForm;
