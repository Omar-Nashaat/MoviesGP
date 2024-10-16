import Card from "react-bootstrap/Card";
import heroCardImg from "./imgs/cardImg.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./css/filmdetals.css";
import { ProgressBar } from "react-bootstrap";

function FilmDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const addToFavoret = (id) => {
    console.log("Added to favoret", id);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulate a delay
  };

  // const dislike = (id) => {
  //   console.log("Disliked", id);
  //   setIsLoading(true);
  //   setTimeout(() => setIsLoading(false), 1000); // Simulate a delay
  // };

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <Card className="card" style={{ width: "100%", height: "auto" }}>
              <Card.Img variant="top" src={heroCardImg} />
              <Card.Body>
                <div id="block-rating" className="block-rating p-3">
                  <div className="rating-result mb-3">
                    <div className="rr-mark">
                      <span>9.4</span>/ 106 voted
                    </div>
                    <ProgressBar now={94.34} className="mb-2" />
                  </div>

                  <div className="add-to-favoret-main text-center  py-3">
                    <Button
                      onClick={() => addToFavoret(111016)}
                      variant="primary"
                      className="add-to-favoret-btn rounded-5"
                    >
                      <i className="fa-regular fa-heart mt-2"></i> Add To
                      Favoret
                    </Button>
                    {/* <Button
                      onClick={() => dislike(111016)}
                      className="btn-secondary btn-sm"
                    >
                      <i className="fa fa-thumbs-down mr-2"></i> Dislike
                    </Button> */}
                  </div>

                  {isLoading && (
                    <div style={{ marginTop: 40 }} id="vote-loading">
                      <div className="loading-relative">
                        <div className="loading">
                          <div className="span1"></div>
                          <div className="span2"></div>
                          <div className="span3"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 offset-lg-1 col-lg-8">
            <div className="card-content d-flex flex-column justify-content-center  align-items-start w-100 h-100 gap-3">
              <Button className="button-85 mt-5 mb-3 " variant="primary">
                <i className="fa fa-play mr-2"></i>Watch trailer
              </Button>
              <h2 className="heading-name">
                <a href="#">Deadpool &amp; Wolverine</a>
              </h2>
              <div className="mb-2 lh-base">
                A listless Wade Wilson toils away in civilian life with his days
                as the morally flexible mercenary, Deadpool, behind him. But
                when his homeworld faces an existential threat, Wade must
                reluctantly suit-up again with an even more reluctant Wolverine.
              </div>
              <div className="elements">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">
                    <div className="row-line">
                      <span className="type">
                        <strong>Released: </strong>
                      </span>
                      2024-07-24
                    </div>
                    <div className="row-line">
                      <span className="type">
                        <strong>Genre: </strong>
                      </span>
                      <a href="/genre/science-fiction" title="Science Fiction">
                        Science Fiction
                      </a>
                      ,
                      <a href="/genre/action" title="Action">
                        Action
                      </a>
                      ,
                      <a href="/genre/comedy" title="Comedy">
                        Comedy
                      </a>
                    </div>
                    <div className="row-line">
                      <span className="type">
                        <strong>Casts: </strong>
                      </span>
                      <a
                        href="/cast/matthew-macfadyen"
                        title="Matthew Macfadyen"
                      >
                        Matthew Macfadyen
                      </a>
                      ,
                      <a href="/cast/ray-park" title="Ray Park">
                        Ray Park
                      </a>
                      ,
                      <a href="/cast/dania-ramirez" title="Dania Ramirez">
                        Dania Ramirez
                      </a>
                      ,
                      <a href="/cast/chris-hemsworth" title="Chris Hemsworth">
                        Chris Hemsworth
                      </a>
                      ,
                      <a
                        href="/cast/brianna-hildebrand"
                        title="Brianna Hildebrand"
                      >
                        Brianna Hildebrand
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                    <div className="row-line">
                      <span className="type">
                        <strong>Duration: </strong>
                      </span>
                      127 min
                    </div>
                    <div className="row-line">
                      <span className="type">
                        <strong>Country: </strong>
                      </span>
                      <a href="/country/us" title="United States of America">
                        United States of America
                      </a>
                    </div>
                    <div className="row-line">
                      <span className="type">
                        <strong>Production: </strong>
                      </span>
                      <a
                        href="/production/marvel-studios"
                        title="Marvel Studios"
                      >
                        Marvel Studios
                      </a>
                      ,
                      <a href="/production/" title="Kevin Feige Productions">
                        Kevin Feige Productions
                      </a>
                      ,
                      <a
                        href="/production/maximum-effort"
                        title="Maximum Effort"
                      >
                        Maximum Effort
                      </a>
                      ,
                      <a
                        href="/production/21-laps-entertainment"
                        title="21 Laps Entertainment"
                      >
                        21 Laps Entertainment
                      </a>
                      ,
                      <a href="/production/genre-films" title="Genre Films">
                        Genre Films
                      </a>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
