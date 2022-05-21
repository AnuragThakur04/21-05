import React from "react";
import "./Book.css";

function Book() {
  return (
    <div className="book">
      <div className="bookcontent">
        <div className="left">
          <h1>Book an eye test near you</h1>
        </div>
        <div className="center">
          <div className="centerContent">
            <input type="text" placeholder="Postcode/suburb/town" />
            <h2>SEARCH</h2>
          </div>
        </div>
        <div className="right">
          <button>Book appointmnet</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
