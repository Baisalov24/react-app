import React from "react";

const PostList = ({ data }) => {
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
