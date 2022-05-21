import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Banner.css";
function Banner() {
  // const navigate = useNavigate()
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* <div className="carousel-item active" data-bs-interval="10000">
            <img src={require('../../src/Assets/image_1.jpg')} className="d-block w-100" alt="..." />
          </div> */}
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src={require("../../src/Assets/image_2.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={require("../../src/Assets/image_3.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
