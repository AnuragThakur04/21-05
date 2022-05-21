import React from "react";
import { NavigationType, useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import "../Styles/Services.css";
const Services = () => {
  const navigation = useNavigate();
  const cards = [
    { image: require("../Assets/image_1.jpg"), heading: "acupunture" },
    {
      image: require("../Assets/image_2.jpg"),
      heading: "chinese herbal medicine",
    },
    { image: require("../Assets/image_3.jpg"), heading: "Cupping" },
    { image: require("../Assets/image_4.jpg"), heading: "Guasha" },
    { image: require("../Assets/image_5.jpg"), heading: "Tuina" },
    { image: require("../Assets/image_6.jpg"), heading: "Root" },
  ];
  return (
    <div>
      <Header />
      <div className="service">
        <div className="story_upper">
          <div className="story_icon wow heartBeat">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="line"></div>
          </div>
          <div className="story_heading">
            <h1>Our Services</h1>
          </div>
        </div>
        <div className="cardSection">
          {cards.length > 0 &&
            cards.map((item, index) => (
              <div className="serviceCard" key={index}>
                <div className="card">
                  {/* <!-- <h2>Read More</h2> --> */}
                  <img
                    src={item.image}
                    alt="back"
                    height="200px"
                    width="100%"
                  />
                  <h5>{item.heading}</h5>
                  <h4>About?</h4>
                  <p>We are experts in providing treatment 1 . </p>
                  <button onClick={() => navigation("/book")}>
                    Book an Appointment
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
