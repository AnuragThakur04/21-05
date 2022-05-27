import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingsScheduler from "../Admin/BookingsScheduler";

const dataClass = {
  date: "",
  time: "",
};
const SelectSlots = ({ close, selected }) => {
  const navigation = useNavigate();
  const [data, setData] = useState(dataClass);
  const [tslots, setTslots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    setData({ ...data, date: moment(new Date()).utc(5).format("YYYY MM DD") });
    timeSlots();
    db.collection("BookedSlots").onSnapshot((e) =>
      setBookedSlots(e.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, [navigation]);
  console.log(data, "dataClasss");
  const timeSlots = () => {
    var x = {
      nextSlot: 30,
      startTime: "10:00",
      endTime: "17:00",
    };
    var slotTime = moment(x.startTime, "HH:mm");
    var endTime = moment(x.endTime, "HH:mm");
    let times = [];
    while (slotTime < endTime) {
      let temp = {
        start: "",
        end: "",
      };
      temp.start = slotTime.format("hh:mm a");
      slotTime = slotTime.add(x.nextSlot, "minutes");
      temp.end = slotTime.format("hh:mm a");
      times.push(temp);
    }
    setTslots(times);
  };
  return (
    <VStack flex="1" bg="#fff" h="80%">
      <Center p="2">
        <Heading>Choose Suitable Slot</Heading>
      </Center>
      <HStack
        space="2"
        p="2"
        my="5"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box shadow="5" w="40%" borderRadius="5" alignItems="center" justifyContent='center'
          h='full'>
          <Text fontSize="lg"
            bg="teal.500"
            w="100%"
            textAlign="center"
            color="#fff"
            fontWeight="bold">Choose Date</Text>
          <BookingsScheduler/>
        </Box>
        <Box
          shadow="5"
          w="40%"
          h='full'
          borderRadius="5"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontSize="lg"
            bg="teal.500"
            w="100%"
            textAlign="center"
            color="#fff"
            fontWeight="bold"
          >
            Available Time Slots
          </Text>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            m="2"
            justifyContent="center"
          >
            {tslots &&
              tslots.map((item, i) => (
                <Pressable
                  w="1\3"
                  h="12"
                  borderRadius="10"
                  borderWidth="1"
                  borderColor="#c8c8c8"
                  m="1"
                  alignItems="center"
                  justifyContent="center"
                  p="2"
                  onPress={() => {
                    !selectedTime
                      ? setSelectedTime(item)
                      : setSelectedTime(null);
                  }}
                  bg={
                    selectedTime
                      ? selectedTime.start === item.start &&
                        selectedTime.end === item.end &&
                        "teal.500"
                      : "#fff"
                  }
                >
                  <Text>
                    {item?.start}-{item?.end}
                  </Text>
                </Pressable>
              ))}
          </Box>
        </Box>
      </HStack>
      <Button w="20%" alignSelf="center" colorScheme="success">
        Confirm
      </Button>
    </VStack>
  );
};

export default SelectSlots;
