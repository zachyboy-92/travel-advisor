import React from "react";
import "./styles/Home.css";
import giphy from "./images/giphy.gif";

function Home() {
  return (
    <div className="home-container">
      <img id="giphy" src={giphy} alt="" />
      <p>
        TravelAdvisor provides you with information on countries you wish to
        travel to
      </p>
    </div>
  );
}

export default Home;
