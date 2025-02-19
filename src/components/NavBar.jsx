import React from "react";
import "./NavBar.css";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = ({ setCategory }) => {
  return (
    <div className="header-main-div">
      <div className="menu-icon-container">
        <HamburgerMenu setCategory={setCategory} />
      </div>

      <img
        className="main-icon"
        height={"80%"}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshorts"
      />
    </div>
  );
};

export default NavBar;
