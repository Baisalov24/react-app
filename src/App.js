import React from "react";
import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  return (
    <div>
      <PostForm data={data} setData={setData}/>
      <PostList data={data} setData={setData} title={"List of Posts"}/>
    </div>
  );
}

export default App;
