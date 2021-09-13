import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Travel">Travel</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar;
