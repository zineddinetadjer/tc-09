import React from "react";
import { useState } from "react";

const Post = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite((prev) => !prev);
  };
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
        <a href="#">Learn more</a>
        <button onClick={handleClick()}>
          {favorite ? <img src="" /> : <img src={notfav} />}
        </button>
      </div>
    </div>
  );
};

export default Post;
