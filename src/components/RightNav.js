import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  right: 30px;

  li {
    padding: 18px 20px;
  }

  li .link {
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-flow: column nowrap;
    background-color: blanchedalmond;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 3rem;
    }
  }
`;

function RightNav({ open }) {
  return (
    <div className="navbar-container">
      <Ul open={open}>
        {/* <nav id="navigation"> */}
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Travel">
            Travel
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact">
            Contact
          </Link>
        </li>
        {/* <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label> */}
        {/* </nav> */}
      </Ul>
    </div>
  );
}

export default RightNav;
