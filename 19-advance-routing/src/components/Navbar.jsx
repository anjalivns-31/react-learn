import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="n">
      <h2 className="h">Anjali</h2>

      <div className="d">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/courses">Courses</Link>

      </div>
    </div>
  );
};

export default Navbar;
