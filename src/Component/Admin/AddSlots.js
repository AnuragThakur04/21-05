import {
  CleaningServices,
  SettingsSystemDaydreamTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  HStack,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
const dataclass = {
  start: "",
  end: "",
  active: true,
};
const AddSlots = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [timeSlot, setTimeSlot] = useState(dataclass);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    db.collection("Timeslots").onSnapshot((res) =>
      setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, [navigation]);

  console.log(data, "data");
  const TimeSlotCard = ({ data }) => {
    return (
      <Box shadow="4" mt="2" p="2" w="8%" alignItems="center">
        <HStack opacity={data?.active ? 1 : 0.5}>
          <Text>{data?.start_time}</Text>
          <Text>--</Text>
          <Text>{data?.end_time}</Text>
        </HStack>
      </Box>
    );
  };
  const addSlot = () => {
    db.collection("Timeslots")
      .add({
        start_time: timeSlot.start,
        end_time: timeSlot.end,
        active: timeSlot.active,
      })
      .then((res) => {
        alert("Time Slot added");
      })
      .catch((err) => {
        console.log(err, "time slot exception");
      });
  };

  console.log(showModal, "modal");
  return (
    <Container w="container" width="100vw">
      <Center m="2" p="2" shadow="6" flex="1" w="full">
        <Text fontSize={"lg"}>Add Slots</Text>
      </Center>
      <VStack flex="1" m="2" p="1" w="full">
        <Box flex="1">
          <Text>Active Time Slotes:</Text>
        </Box>
        <Box
          alignItems="center"
          justifyContent={"center"}
          flex="1"
          flexDirection={"row"}
          flexWrap="wrap"
        >
          {data.length > 0 ? (
            data.map((item) => <TimeSlotCard data={item} key={item?.id} />)
          ) : (
            <Center>
              <Text color={"error.900"} fontSize="lg">
                No time Slots Found
              </Text>
            </Center>
          )}
        </Box>
      </VStack>

      <Box alignItems={"center"} justifyContent="center" w="full">
        <Pressable
          bg="teal.900"
          w="8vw"
          p="2"
          m="3"
          borderRadius={"sm"}
          onPress={() => {
            console.log("pressed");
            setShowModal(true);
          }}
        >
          <Text color="#fff">+ Add</Text>
        </Pressable>
      </Box>
    </Container>
  );
};

export default AddSlots;
