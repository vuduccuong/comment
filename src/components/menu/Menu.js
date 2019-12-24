import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link> ||
      <Link to="/comment">Comment</Link>
    </div>
  );
};

export default Menu;
