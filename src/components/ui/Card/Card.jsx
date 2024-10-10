/* eslint-disable react/prop-types */

import "./Card.css";
export default function Card({ imageSource, title, date, type }) {
  return (
    <div className="Card">
      <div className="posterHolder">
        <img src={imageSource} alt="" />
      </div>
      <a href="">{title}</a>
      <div className="posterInformation">
        <div className="left">
          <span>{new Date(date).getFullYear()}</span>
          <span className="dot"></span>
          <span>97m</span>
        </div>
        <div className="right">
          <span>
            {type == "tv"
              ? type.toUpperCase()
              : type == "movie"
              ? "Movie"
              : type}
          </span>
        </div>
      </div>
    </div>
  );
}
