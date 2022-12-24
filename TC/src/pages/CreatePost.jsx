import React from "react";
import Navbar from "../Components/navbar/Navbar";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-side">
          <h1>Post your AD!</h1>
          <input type="file" placeholder="Place your car picture here" />
          <h1>Name</h1>
          <input type="text" placeholder="Name" />
          <h1>Year</h1>
          <input type="text" placeholder="Year" />
        </div>
        <div className="right-side">
          <h1>Model</h1>
          <input type="text" />
          <h1>Km driven</h1>
          <input type="text" />
          <h1>Car description</h1>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
