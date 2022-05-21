import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Adver.css";

function Adver() {
  
  const navigation = useNavigate();
  return (
    <div className="adver">
      <h1>Due for a check-up? Book now:</h1>
      <button onClick={() => navigation("/book")}>Book an Appointment</button>
    
    </div>
  );
}

export default Adver;
