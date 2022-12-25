import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/LOGO TC-cropped.svg";

const Navbar = (location) => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="nav">
      <div className="logo">
        <a href="./home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <a href="./home">
          <button className="L-btns">Home</button>
        </a>
        <Link to="/create">
          <button className="L-btns">Sell</button>
        </Link>
        {isSignIn ? (
          <div className="Profile">
            <div className="profile-pic"></div>
            <h3>UserName</h3>
          </div>
        ) : (
          <div className="Log">
            <Link to="/auth">
              <button id="first">Log In</button>
            </Link>
            <Link to="/auth">
              <button>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
