import React from "react";
import "./NewsCard.css";
const NewsCard = ({ newsItem }) => {
  //   console.log(newsItem);
  if (!newsItem?.publishedAt) return null;
  // Convert ISO date string to Date object
  const dateObj = new Date(newsItem.publishedAt);

  // Extract components
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "pm" : "am";
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  // Extract day, date, month, and year
  const day = dateObj.toLocaleString("en-US", { weekday: "long" });
  const dayNum = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const year = dateObj.getFullYear();

  // Final formatted date string
  const formattedDate = `${hours}:${minutes} ${amPm} on ${day} ${dayNum} ${month}, ${year}`;
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
        <span className="newsTitle">{newsItem.title}</span> <br />
        <span className="author">
          <a href={newsItem.url} target="__blank">
            <b>short </b>
          </a>
          <span className="muted">
            {" "}
            by {newsItem?.author ? newsItem.author : "unknown"}/ {formattedDate}
          </span>
        </span>
        <div className="newsDescription-lower">
          <div className="newsDescription">
            {" "}
            {newsItem.description
              ? newsItem.description
              : "No description available."}
          </div>
          <span className="read-more">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
