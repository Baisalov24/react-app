import React from "react";
import PostItem from "./PostItem";

const PostList = ({ data, setData, title  }) => {
  if (!data.length) {
    return <h1 style={{ textAlign: "center" }}>No posts found!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {data.map((post) => (
        <PostItem post={post} key={post.id} data={data} setData={setData} />
      ))}
    </div>
  );
};
export default PostList;
