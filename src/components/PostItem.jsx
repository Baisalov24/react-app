import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props, data, setData) => {

    function removePost (id) {
        setData(data.filter(item => item.id !== id))
     }
    return(
        <div className="post" key={props.post.id}>
          <div className="post__content">
            <strong>
              {props.post.id}. {props.post.title}
            </strong>
            <div>{props.post.body}</div>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => removePost(props.post.id)}>Delete</MyButton>
          </div>
        </div>
    )
}

export default PostItem;