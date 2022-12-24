import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./Createpost.css";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <h1>Post your AD!</h1>
      <div className="form-container">
        <div className="left-side1">
          <h1>Car picture</h1>
          <input type="file" placeholder="Place your car picture here" />
          <h1>Name</h1>
          <input type="text" placeholder="Name" />
          <h1>Year</h1>
          <input type="text" placeholder="Year" />
          <button className="estimation">Estimation de prix</button>
          <h3 className="prix-esti">450000da</h3>
        </div>
        <div className="right-side1">
          <h1>Model</h1>
          <input type="text" />
          <h1>Km driven</h1>
          <input type="text" />
          <h1>Car description</h1>
          <input type="text" />
          <button className="submit">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
