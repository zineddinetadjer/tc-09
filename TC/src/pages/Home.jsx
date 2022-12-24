import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Search from "../Components/Search/Search";
import image from "../assets/image 1.png";
import "./home.css";
import Posts from "../Components/posts/Posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-side">
          <h1>
            Welcome to <span className="name">ICAR</span>
          </h1>
          <p>
            Your plateform for buying and
            <br />
            selling your cars
          </p>

          <Search />
        </div>
        <div className="right-side">
          <img src={image} alt="" />
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
