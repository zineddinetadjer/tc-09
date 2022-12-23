import React from "react";
import icon from "../../assets/magnifying-glass.png";
import "./search.css";

const Search = () => {
  return (
    <div className="searchBar">
      <div className="pic">
        <img src={icon} alt="" />
      </div>
      <div className="place">
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
