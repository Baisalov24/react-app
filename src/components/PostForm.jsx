import React from "react";
import { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });

  return (
    <div>
      <input
        onChange={(e) => setPost({ title: e.target.value })}
        type="text"
        placeholder="type title"
        value={post.title}
      />
      <input
        onChange={(e) => setPost({ body: e.target.value })}
        type="text"
        placeholder="type text"
        value={post.body}
      />
    </div>
  );
};

export default PostForm;
