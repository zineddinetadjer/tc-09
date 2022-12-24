import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="picture">
        <img src="" alt="" />
      </div>
      <div className="desc">
        <h3>Title</h3>
        <h3>Année</h3>
        <p>description</p>
        <h2>Prix</h2>
      </div>
      <div>
        <a href="/details">Learn more</a>
      </div>
    </div>
  );
};

export default Post;
