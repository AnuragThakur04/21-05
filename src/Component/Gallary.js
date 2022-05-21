import React from "react";
import "./Gallary.css";

function Gallary() {
  return (
    <div className="gallery">
      <div className="galleryContent">
        <div className="galleryleft">
          <h1>Store locations</h1>
          <p>
            Get bulk bill eye test with an optometrist at any one of our 110+
            Australian store locations.
          </p>
          <p>
            Come visit us to have your eye health checked, look out for eye
            problems or eye diseases, update your prescription, and try on all
            of our glasses frames to find the perfect fit. Our in-store stylists
            are here to help you find the right pair of glasses or sunglasses.
          </p>
          <button>Find Out More</button>
        </div>
        <div className="galleryright">
          <img
            src="	https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/bluelightt.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="galleryContent">
        <div className="galleryright">
          <img
            src="https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/multifocals.jpg"
            alt=""
          />
        </div>
        <div className="galleryleft">
          <h1 style={{ paddingLeft: "20px" }}>Store locations</h1>
          <p style={{ paddingLeft: "20px" }}>
            Get bulk bill eye test with an optometrist at any one of our 110+
            Australian store locations.
          </p>
          <p style={{ paddingLeft: "20px" }}>
            Come visit us to have your eye health checked, look out for eye
            problems or eye diseases, update your prescription, and try on all
            of our glasses frames to find the perfect fit. Our in-store stylists
            are here to help you find the right pair of glasses or sunglasses.
          </p>
          <div style={{ paddingLeft: "20px" }}>
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
