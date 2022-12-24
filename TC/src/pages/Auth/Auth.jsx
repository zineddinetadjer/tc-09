import React from "react";
import { useState } from "react";
import "./auth.css";
import axios from "axios";

const Auth = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    wilaya: "",
  };

  const [user, setUser] = useState(true);

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post("http://127.0.0.1:5000/accounts", {
        username: body.username,
        email: body.email,
        password: body.password,
        wilaya: body.wilaya,
        photo: "hgf",
        phone: "00",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {user ? (
        <div className="signIn">
          <h1 className="head">
            iCar Allow you to buy and sell cars in the algerian market
          </h1>
          <div className="container">
            <h3>Login now to discover more </h3>
            <div className="inpt-container">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div className="inpt-container">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="btn">Login</button>
          </div>
        </div>
      ) : (
        <div className="signUp">
          <h1 className="head">Please create your account</h1>
          <div className="container2">
            <div className="inpt-container">
              <input
                className="input"
                type="name"
                name="username"
                placeholder="Username"
                handleChange={handleChange}
              />
            </div>
            <div className="inpt-container">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                handleChange={handleChange}
              />
            </div>
            <div className="inpt-container">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                handleChange={handleChange}
              />
            </div>
            <div className="inpt-container">
              <select className="input">
                <option className="options" value="Algiers">
                  Algiers
                </option>
                <option className="options" value="Tipaza">
                  Tipaza
                </option>
                <option className="options" value="Constantine">
                  Constantine
                </option>
                <option className="options" value="Blida">
                  Blida
                </option>
                <option className="options" value="Adrar">
                  Adrar
                </option>
                <option
                  className="optio
                ns"
                  value="Ain Timouchent"
                >
                  Ain Timouchent
                </option>
                <option className="options" value="Oran">
                  Oran
                </option>
              </select>
            </div>
            <button
              className="btn"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Create Account
            </button>
            <div>
              By clicking " Create Account " I agree To Icar's{" "}
              <a href=""> TOS </a>&<a href=""> Privacy Policy </a>
            </div>
          </div>
        </div>
      )}
      <div className="createAcc">
        <p
          onClick={() => {
            setUser((prev) => !prev);
          }}
        >
          {user ? (
            <p>
              You don't have an account ?{" "}
              <span className="highlight">Create an account</span>
            </p>
          ) : (
            <p>
              You already have an account ?{" "}
              <span className="highlight">Login</span>
            </p>
          )}
        </p>
      </div>
    </>
  );
};

export default Auth;
