import React, { useState } from "react";
import PostForm from "./components/PostForm";

function App() {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.json())
    .then((info) => setData(info));

  return (
    <div>
      {data.map((postData) => (
        <div key={postData.id}>
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
