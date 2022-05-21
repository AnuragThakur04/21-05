import React from "react";
import Header from "../Component/Header";
import "../Component/Location.css";

function Location() {
  return (
    <div className="location">
      <Header />
      <div>
        <div className="locationContent container">
          <div className="left">
            <h1>Store locations</h1>
            <p>Visit Us By Clicking the map attached here.</p>
            <p>
              Come visit us to have your health checked, look out to us for any
              problems or any diseases, an get your diseases cured with no side
              effects.
            </p>
            <button>Find Location</button>
          </div>
          <div className="right">
            {/* <img
            src="https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/locations_ow.jpeg"
            alt=""
          /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9409518392517!2d145.05582635109894!3d-37.8850635796401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a23057e7f59%3A0x510d55f3326937e3!2s36%20Koornang%20Rd%2C%20Carnegie%20VIC%203163%2C%20Australia!5e0!3m2!1sen!2sin!4v1652273485870!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
