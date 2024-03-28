// import { useState, useEffect } from "react";
// import PostList from "./components/PostList";
// import PostForm from "./components/PostForm";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MyButton from "./components/UI/button/MyButton";
// import { usePosts } from "./hooks/usePosts";
// import PostService from "./API/PostService";
// import Loader from "./components/UI/Loader/Loader";
// import { useFetching } from "./hooks/useFetching";
// import Pagination from "./components/UI/pagination/Pagination";
// import { getPageCount } from "./utils/pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
