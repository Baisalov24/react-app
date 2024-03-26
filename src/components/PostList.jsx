import React from "react";
import { useState } from "react";

const PostList = () => {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((info) => setData(info));

  return (
    <div>
      {data.map((postData) => (
        <div className="post" key={postData.id}>
          <div className="post__content">
            <strong>
              {postData.id}. {postData.title}
            </strong>
            <div>{postData.body}</div>
          </div>
          <div className="post__btns">
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostList;
