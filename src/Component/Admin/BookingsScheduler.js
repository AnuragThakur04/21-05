import { Center } from "native-base";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const BookingsScheduler = () => {
  const [value, onChange] = useState(new Date());

  console.log(value, "calender Cale");
  return (
    <Center p="3" m='1'>
      <Calendar onChange={onChange} value={value} />
    </Center>
  );
};

export default BookingsScheduler;
