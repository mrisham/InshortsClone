import React from "react";
import "./NewsCard.css";
const NewsCard = ({ newsItem }) => {
  console.log(newsItem);
  return (
    <div className="newsCard">
      <img
        src={
          newsItem?.urlToImage
            ? newsItem?.urlToImage
            : "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="newsImg"
        className="newsImg"
      />
      <div className="newsText">
        <div>
          <span className="newsTitle">{newsItem.title}</span> <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>
            <span className="muted">
              {" "}
              by {newsItem?.author ? newsItem.author : "unknown"}/
            </span>
          </span>
          <div className="newsDescription-lower">
            <div className="newsDescription">{newsItem.description}</div>
            <span className="read-more">
              read more at{" "}
              <a href={newsItem.url} target="__blank" className="source">
                <b>{newsItem.source.name}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
