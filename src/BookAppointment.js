import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./BookAppointment.css";
import { db } from "./firebase";
import firebase from "firebase";
import Header from "./Component/Header";
import { FamilyRestroomRounded } from "@mui/icons-material";

const dataClass = {
  firstname: "",
  lastname: "",
  address: "",
  phone: "",
  email: "",
};
function BookAppointment() {
  const [data, setData] = useState(dataClass);
  const [success, setSuccess] = useState(false);

  const sendAppointment = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jx4br1k",
        "template_e537bi4",
        e.target,
        "ViQ0OXaS8aiGcBtLl"
      )
      .then((res) => {
        console.log(res, "email response");
        db.collection("Bookings")
          .add({
            name: data.firstname + "\t"+data.lastname,
            email: data.email,
            address: data.address,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            phone: data.phone,
          })
          .then((res) => {
            console.log(res, "firebase response");
            setSuccess(true);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Header />
      <div className="bookAppointment">
        <div className="bookLeft">
          <h1>Book You New Slot and Save Your Time</h1>
          <p>
            Here we'll show welcome message and assurance of treatment of some
            positive words
          </p>
          <h2>For Help Call: +61 their Number</h2>
        </div>
        <form className="bookRight" onSubmit={sendAppointment}>
          <h1>Book Appointment</h1>
          <div className="rightContent">
            <div className="nameBlock">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                required
                onChange={(e) => {
                  setData({ ...data, firstname: e.target.value });
                }}
              />
              <input
                type="text"
                name="lastname"
                required
                placeholder="Last Name"
                onChange={(e) => {
                  setData({ ...data, lastname: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                }}
                type="number"
                required
                name="phone"
                placeholder="Contact Number"
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                type="email"
                required
                name="user_email"
                placeholder="Email "
              />
            </div>
            <div>
              <input type="datetime-local" placeholder="Select Date" />
            </div>

            <div className="address">
              <p>Address Detail</p>
              <div style={{ display: "flex" }}>
                <input
                  onChange={(e) => {
                    setData({ ...data, address: e.target.value });
                  }}
                  type="text"
                  placeholder="Entter Address"
                />
                <input
                  style={{ marginLeft: "10px" }}
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div style={{ display: "flex" }}>
                <input type="text" placeholder="Enter Area" />
                <input
                  style={{ marginLeft: "10px" }}
                  type="text"
                  placeholder="Enter Postal code"
                />
              </div>
            </div>
            <button>book an appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
