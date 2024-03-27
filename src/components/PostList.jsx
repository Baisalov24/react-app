import { func } from "prop-types";
import React from "react";

const PostList = ({ data, setData }) => {
    function removePost (id) {
       setData(data.filter(item => item.id !== id))
    }

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
            <button onClick={() => removePost(postData.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostList;
