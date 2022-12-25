import React from "react";
import Post from "./post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/posts")
      .then((response) => {
        response.json();
      })
      .then((data) => setPosts(data.posts));
    console.log(posts);
  }, []);

  return <div></div>;
};

export default Posts;
