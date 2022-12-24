import React from "react";
import send from "../../Components/images/send1.png";
import Navbar from "../../Components/navbar/Navbar.jsx";
import postImg from "../../assets/img-post.png";
import profile from "../../assets/Ellipse_5.png";
import "./Details.css";
const Details = () => {
  return (
    <div className="details">
      <Navbar />
      <div className="high-container">
        <div className="post-pic">
          <img className="post-img" src={postImg} alt="Post-image" />
        </div>
        <div className="post-details">
          <h3 className="type">Type Automobile</h3>
          <div className="cla">
            <div className="postdet">
              <h4>Year :</h4>
              <p>2013</p>
            </div>
            <div className="postdet">
              <h4>Km Driven : </h4>
              <p>170000</p>
            </div>
            <div className="postdet">
              <h4>Fuel :</h4>
              <p>Diesel</p>
            </div>
            <div className="postdet">
              <h4>Transmition : </h4>
              <p>Manuel</p>
            </div>
            <div className="postdet">
              <h4>Meilage :</h4>
              <p>20.54 kmpl</p>
            </div>
            <div className="postdet">
              <h4>Engine : </h4>
              <p>1598 CC</p>
            </div>
            <div className="postdet">
              <h4>No of seat : </h4>
              <p>5</p>
            </div>
            <div className="postdet">
              <h4>Price : </h4>
              <p>45000 DA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="comments-section">
        <div className="comments-input">
          <img className="avatar" src={profile} alt="profile image" />
          <input type="text" placeholder="Laissez commentaire..." />
          <img className="img" src={send} alt="" />
        </div>
      </div>
      <div className="comments">Exemple Commenteur</div>
    </div>
  );
};

export default Details;
