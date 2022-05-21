import React from "react";
import "./Frame.css";

const card = [
  {
    title: "New Arrivals",
    desc: "Shop our new collection of the latest glasses, including prescription and non-prescriptions. With 2 pairs from $199.",
    button: "Explore More",
    img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
  },
  {
    title: "Shop by Face Shape",
    desc: "No matter what your face shape is, there’s a flattering style for you. Learn how to choose the best glasses to suit your face shape!",
    button: "Learn More",
    img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
  },
];

const thumb = [
  {
    title: "Iconic Range",
    button: "shop now",
  },
  {
    title: "Jelly Collection",
    button: "shop now",
  },
  {
    title: "Sunglasses",
    button: "shop now",
  },
];

function Frame() {
  // console.log(window.location)
  //   const handleClick=()=>{
  //     // window.location.replace('/about')
  //   }

  return (
    <div className="frame" style={{ paddingTop: "20px" }}>
      <div className="aboutUs" id="about">
        <div className="heading wow fadeInLeft">
          <h1>TIMINGS </h1>
        </div>
        <div className="frame_about wow fadeInRight">
          <ul>
            <li>
              The Clinic is Open from 10:00 am to 5:00 pm from Monday to Friday{" "}
            </li>
            <li>
              And 10:00 am to 4:00 pm on Saturdays, while Sundays are OFF.{" "}
            </li>
          </ul>
          {/* <p className="frame_viewMore">
            <h4>{"View More > "}</h4>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Frame;
