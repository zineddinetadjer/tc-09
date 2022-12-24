import React from "react";
import send from "../Components/images/send.png";

const Details = () => {
  return (
    <div className="details">
      <div className="high-container">
        <div className="post-pic"></div>
        <div className="post-details"></div>
      </div>
      <div className="comments-section">
        <div className="comments-input">
          <input type="text" placeholder="Laissez un commentaire ici..." />
          <img src={send} alt="" />
        </div>
        <div className="comments"></div>
      </div>
    </div>
  );
};

export default Details;
