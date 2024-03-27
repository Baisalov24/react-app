import React from "react";
import MyButton from "./UI/button/MyButton";

const PostList = ({ data, setData }) => {
    function removePost (id) {
       setData(data.filter(item => item.id !== id))
    }

    if(!data.length) {
        return( 
            <h1 style={{textAlign: 'center'}}>
               No posts found!
            </h1>
        )
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
            <MyButton onClick={() => removePost(postData.id)}>Delete</MyButton>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostList;
