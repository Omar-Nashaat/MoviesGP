/* eslint-disable react/prop-types */

import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ all, imageSource, title, first, second, type }) {
  const navigate = useNavigate();

  const onclick = () => {
    if (type == "person") {
      if (all.id) {
        navigate(
          "/" + "person" + "/?" + "person=" + all.id + "&name=" + all.name
        );
      }
    }
  };
  return (
    <div className="Card" onClick={onclick}>
      <div className="posterHolder">
        <img src={imageSource} alt="" />
      </div>
      <a href="">{title}</a>
      <div className="posterInformation">
        <div className="left">
          <span>{type != "person" && first}</span>
          {type != "person" && <span className="dot"></span>}
          <span>{type != "person" && second}</span>
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
