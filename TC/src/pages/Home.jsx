import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Search from "../Components/Search/Search";
import image from "../assets/image 1.png";
import more from "../Components/images/Vector.png";
import "./home.css";
import Posts from "../Components/posts/Posts";
import CreatePost from "./Createpost/CreatePost";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="big-container">
        <div className="container1">
          <div className="left-side">
            <h1>
              Welcome to <span className="name">ICAR</span>
            </h1>
            <p>
              Your plateform for buying and
              <br />
              selling your cars
            </p>
          </div>
          <div className="right-side">
            <img src={image} alt="" />
          </div>
        </div>
        <Search />
        <h3 className="explore">Explore more</h3>
        <img src={more} alt="" className="more" />
        <img src={more} alt="" className="more1 more" />
      </div>
    </div>
  );
};

export default Home;
