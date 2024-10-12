/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import "./Cards.css";

// eslint-disable-next-line react/prop-types
export default function Cards({ Results, Type }) {
  const getImgSource = (response) => {
    if (response.poster_path) {
      return response.poster_path;
    } else if (response.backdrop_path) {
      return response.backdrop_path;
    } else {
      if (response.known_for) {
        let array =
          response.known_for.filter((f) => {
            if (f.backdrop_path) {
              return true;
            } else if (f.poster_path) {
              return true;
            }
          }) || [];
        return array.length > 0
          ? array[0].backdrop_path || array[0].poster_path
          : "";
      }
    }
  };
  const init = () => {
    let array = [];
    for (let i = 0; i < Results.length; i++) {
      array.push(
        <Card
          imageSource={
            "https://image.tmdb.org/t/p/w500/" + getImgSource(Results[i])
          }
          title={Results[i].title || Results[i].name}
          date={Results[i].release_date || Results[i].first_air_date}
          type={
            Type === "search"
              ? Results[i].media_type
              : Type != "movie" && Type != "tv"
              ? "movie"
              : Type
          }
        />
      );
    }
    return array;
  };
  return <div className="Cards">{init()}</div>;
}
