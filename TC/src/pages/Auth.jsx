import React from "react";
import { useState } from "react";
import "./auth.css";

const Auth = () => {
  const [user, setUser] = useState(true);
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
              />
            </div>
            <div className="inpt-container">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
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
            <div className="inpt-container">
              <select className="input">
                <option className="options" value="">
                  Algiers
                </option>
                <option className="options" value="">
                  Tipaza
                </option>
                <option className="options" value="">
                  Constantine
                </option>
                <option className="options" value="">
                  Blida
                </option>
                <option className="options" value="">
                  Adrar
                </option>
                <option
                  className="optio
                ns"
                  value=""
                >
                  Ain Timouchent
                </option>
                <option className="options" value="">
                  Oran
                </option>
              </select>
            </div>
            <button className="btn">Create Account</button>
            <p>
              By clicking " Create Account " I agree To Icar's{" "}
              <a href=""> TOS </a>&<a href=""> Privacy Policy </a>
            </p>
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
