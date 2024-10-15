/* eslint-disable react/prop-types */

import "./Card.css";
<<<<<<< HEAD
export default function Card({ imageSource, title, date, type }) {
  return (
    <div className="Card">
=======
import { useNavigate } from "react-router-dom";

export default function Card({ all, imageSource, title, first, second, type }) {
  const navigate = useNavigate();

  const onclick = () => {
    if (type == "person") {
      if (all.id) {
        navigate(
          "/result/" +
            "person" +
            "/?" +
            "person=" +
            all.id +
            "&name=" +
            all.name
        );
      }
    }
  };
  return (
    <div className="Card" onClick={onclick}>
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
      <div className="posterHolder">
        <img src={imageSource} alt="" />
      </div>
      <a href="">{title}</a>
      <div className="posterInformation">
        <div className="left">
<<<<<<< HEAD
          <span>{new Date(date).getFullYear()}</span>
          <span className="dot"></span>
          <span>97m</span>
=======
          <span>{type != "person" && first}</span>
          {type != "person" && <span className="dot"></span>}
          <span>{type != "person" && second}</span>
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
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
