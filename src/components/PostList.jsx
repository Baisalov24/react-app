import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No posts found!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          post={post}
          remove={remove}
          number={index + 1}
          key={post.id}
        />
      ))}
    </div>
  );
};
export default PostList;
