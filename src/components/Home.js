import React from "react";
import "./styles/Home.css";
import giphy from "./images/giphy.gif";
import location from "./images/location.png";
import translate from "./images/translate.png";
import info from "./images/info.png";
import currency from "./images/currency.png";

function Home() {
  return (
    <div className="home-container">
      <div className="about-container">
        <img id="giphy" src={giphy} alt="" />
        <p>
          TravelAdvisor provides you with tons of features you can use the next
          time you decide to travel. Whether you're looking for information,
          location, translation or currency-exchange all available in a click of
          a button.
        </p>
      </div>
      <div className="services-container">
        <h2>Services</h2>
        <div className="services">
          <div className="service-container">
            <img className="service-logo" src={info} alt="info-logo" />
            <div className="service-type">
              <h3>Destination Info</h3>
              <p>
                We provide you with all the information about your next
                destination
              </p>
            </div>
          </div>
          <div className="service-container">
            <img className="service-logo" src={location} alt="location-logo" />
            <div className="service-type">
              <h3>Destination Location</h3>
              <p>
                See destination you will be travelling to and cities around it
              </p>
            </div>
          </div>
          <div className="service-container">
            <img
              className="service-logo"
              src={translate}
              alt="translate-logo"
            />
            <div className="service-type">
              <h3>Translation</h3>
              <p>Get the most accurate translation at the tip of youe hand</p>
            </div>
          </div>
          <div className="service-container">
            <img className="service-logo" src={currency} alt="currency-logo" />
            <div className="service-type">
              <h3>Currency Exchange</h3>
              <p>
                Up to date currency exchange converter with more than 100 of
                currencies to pick from
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
