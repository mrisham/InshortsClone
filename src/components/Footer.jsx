import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="foot-col-1">
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
          alt="logo"
          className="footer-logo"
        />
        {/* <p>Inshorts Clone</p> */}
      </div>
      <div className="foot-col-2">
        <p>© 2025 Mridul Shukla. All rights reserved.</p>
        <nav>
          <a href="#about">About Us</a> | <a href="#privacy">Privacy Policy</a>{" "}
          | <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="foot-col-3">
        <div className="social-icons">
          <a href="#facebook" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
