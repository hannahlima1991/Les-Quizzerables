import React from "react";
import "./Home.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper row">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} class="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block fontoColor discriptionContainer">
              <h2>
                1- Googling answers is not allowed, remember that you're here to
                exercise your own useless knowledge.
              </h2>
              <h2>2- Choose a category.</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} class="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block fontColor discriptionContainer">
              <h2>
                3- If you answer correctly in the first 10 seconds,you get 10
                points.
              </h2>
              <h2>
                4- If you answer correctly in the first 20 seconds,you get 5
                points.
              </h2>
              <h2>
                5- If you answer correctly with 10 seconds or less left,you get
                2 points.
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} class="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block fontColor discriptionContainer">
              <h2>Thats it, pretty simple right?</h2>
              <h2>Press Start and let's have fun !</h2>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
      <Link to="/categories">
        <button type="button" className="getStartedButton">
          Get Started
        </button>
      </Link>
    </div>
  );
}
export default Home;

//color blue #007BFF
