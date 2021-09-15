import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "./images/nav-logo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div id="logo-container">
        <img id="logo" src={logo} alt="nav-logo" />
        <h3>TravelAdvisor</h3>
      </div>
      <div id="navigation">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Travel">
          Travel
        </Link>
        <Link className="link" to="/Contact">
          Contact
        </Link>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
