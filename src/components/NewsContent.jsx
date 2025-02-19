import React from "react";
import "./NewsContent.css";
import { Container } from "@mui/material";
const NewsContent = () => {
  return (
    <div>
      <Container maxWidth="md">
        <div className="content">
          <div className="download-msg">
            <span className="download-text">
              For better experience use <b>inshorts</b> app on your smartphone
            </span>
            <img
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="ios store"
              height="80%"
            />
            <img
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="app store"
              height="80%"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsContent;
