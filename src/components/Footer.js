import { Component } from "react";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import "./styles/Footer.css";

const date = new Date();
const year = date.getFullYear();
console.log(year);

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="logo-container">
          <img className="footer-logo" src={facebook} alt="facebook-logo" />
          <img className="footer-logo" src={github} alt="github-logo" />
          <img className="footer-logo" src={instagram} alt="instagram-logo" />
          <img className="footer-logo" src={linkedin} alt="linkedin-logo" />
        </div>
        <p>© {year} TravelAdvisor By Zakaria Merfouk</p>
      </footer>
    );
  }
}

export default Footer;
