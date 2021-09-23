import React from "react";
import styled from "styled-components";
import BurgerNavbar from "./BurgerNavbar";
import logo from "./images/nav-logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;

  .logo {
    padding: 15px 0;
  }

  #logo-container {
    display: flex;
    align-items: center;
    position: fixed;
    left: 50px;
  }

  #logo {
    width: 100px;
    height: 50px;
  }

  #logo-container h3 {
    font-size: 1.3rem;
    margin-left: -15px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div id="logo-container">
        <img id="logo" src={logo} alt="nav-logo" />
        <h3>TravelAdvisor</h3>
      </div>
      <BurgerNavbar />
    </Nav>
  );
};

export default Navbar;
