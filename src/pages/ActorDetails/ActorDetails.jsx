import { useEffect, useState } from "react";
// import image from "../../assets/images/img.jpg";
import "./ActorDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getActorDetails } from "@/components/customized/Controller/APIController/ActorDetailsHandler";
export default function ActorDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Access query string
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const load = async () => {
    console.log(queryParams.get("person"));
    let response = await getActorDetails(queryParams.get("person"));
    setResult(response);
  };
  const GoToMedia = () => {
    navigate(
      "/result/" +
        "person" +
        "/?" +
        "person=" +
        result.id +
        "&name=" +
        result.name
    );
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="ActorDetails">
      <div className="BackGroundImage" style={{}}>
        <img
          src={
            result && "https://image.tmdb.org/t/p/w780/" + result.profile_path
          }
          alt=""
        />
        <div className="ActorContent">
          <div className="Left">
            <div className="leftContainer">
              <img
                src={
                  result &&
                  "https://image.tmdb.org/t/p/w500/" + result.profile_path
                }
                alt=""
              />
            </div>
          </div>
          <div className="Right">
            <div className="rightContainer">
              <a href="#">{result && result.name}</a>
              <p>{result && result.biography}</p>
              <div className="personDetails">
                <span>BirthDate: {result && result.birthday}</span>
                <span>Country: {result && result.place_of_birth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={GoToMedia}>Show Media</button>
      </div>
    </div>
  );
}
