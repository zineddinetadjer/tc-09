import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import { useState } from "react";
import "./Createpost.css";

const CreatePost = () => {
  const initialState = {
    picture: "",
    name: "",
    year: "",
    model: "",
    km: "",
    desc: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post("http://127.0.0.1:5000/posts", {
        picture: form.picture,
        name: form.name,
        model: form.model,
        year: form.year,
        km: form.km,
        desc: form.desc,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Post your AD!</h1>
      <div className="form-container">
        <div className="left-side1">
          <h1>Car picture</h1>
          <input
            type="file"
            name="picture"
            placeholder="Place your car picture here"
          />
          <h1>Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <h1>Year</h1>
          <input
            type="text"
            name="year"
            placeholder="Year"
            onChange={handleChange}
          />
          <button className="estimation">Estimation de prix</button>
          <h3 className="prix-esti">450000da</h3>
        </div>
        <div className="right-side1">
          <h1>Model</h1>
          <input type="text" name="model" onChange={handleChange} />
          <h1>Km driven</h1>
          <input type="text" name="km" onChange={handleChange} />
          <h1>Car description</h1>
          <input type="text" name="desc" onChange={handleChange} />
          <button className="submit" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
