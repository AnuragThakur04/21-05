import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./BookAppointment.css";
import { db } from "./firebase";
import firebase from "firebase";
import Header from "./Component/Header";
import { FamilyRestroomRounded } from "@mui/icons-material";
import { Modal, TextField } from "@mui/material";
import { Button,  Text } from "native-base";
import BookingsScheduler from "./Component/Admin/BookingsScheduler";
import SelectSlots from "./Component/BookingAppointment/SelectSlots";

const dataClass = {
  firstname: "",
  lastname: "",
  address: "",
  phone: "",
  user_email: "",
};
function BookAppointment() {
  const [data, setData] = useState(dataClass);
  const [success, setSuccess] = useState(false);
  const [showTime, setShowTime] = useState(false);

  console.log(showTime,'shoe time')
  const sendAppointment = (e) => {
    console.log('clicked',e.target)
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
            name: data.firstname + "\t" + data.lastname,
            email: data.user_email,
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
          <Text fontSize="3xl" fontWeight="bold" my="3">
            Book Appointment
          </Text>

          <div className="nameBlock">
            <TextField
              className="name-input"
              label="First Name"
              type="text"
              variant="outlined"
              value={data?.firstName}
              required
              onChange={(e) => {
                setData({ ...data, firstname: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              className="name-input"
              required
              type="text"
              value={data?.lastname}
              label="Last Name"
              onChange={(e) => {
                setData({ ...data, lastname: e.target.value });
              }}
            />
          </div>
          <TextField
            variant="outlined"
            required
            className="input-field"
            type="text"
            value={data?.phone}
            label="Contact Number"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            required
            className="input-field"
            type="email"
            label="Email"
            name="user_email"
            value={data?.user_email}
            onChange={(e) => {
              setData({ ...data, user_email: e.target.value });
            }}
          />
          <Button
            size="sm"
            variant="solid"
            my="3"
            h="12"
            bg="#75bf47"
            onPress={() => setShowTime(true)}
          >
            <Text fontSize="lg" fontWeight="bold" color="#fff">
              Choose Your Slot
            </Text>
          </Button>
          <input className="btn btn-primary" type='submit' value="BOOK AN APPOINTMENT"/>
          {/* <Button size="sm" variant="solid" h="12" bg="teal.900">
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="#fff"
              textTransform="uppercase"
            >
              book an appointment
            </Text>
          </Button> */}
        </form>
        <Modal
          open={showTime}
          className="time-modal"
          onClose={()=>setShowTime(false)}
        >
        <SelectSlots/>
        </Modal>
      </div>
    </div>
  );
}

export default BookAppointment;
