import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddSlots from "../../Component/Admin/AddSlots";
import AllBookings from "./AllBookings";
import ChangeSlots from "./ChangeSlots";

const AdminDashboard = () => {
  const navigation=useNavigate();
  const [active, setActive] = useState(0);
  const logoutUser=()=>{
    localStorage.clear()
    navigation('/')
  }
  return (
    <VStack flex="1">
      <HStack alignSelf="flex-end" mx="20" my="10">
        <Button colorScheme="danger" mx='2' onPress={logoutUser}>Logout</Button>
        <Button colorScheme="primary" onPress={()=>{
          navigation('/')
        }}>Home</Button>
      </HStack>
      <Center>
        <HStack space={3} justifyContent="center" mt="20">
          <Box w="20vw">
            <Button onPress={() => setActive(0)}>All Bookings</Button>
          </Box>
          <Box w="20vw">
            <Button onPress={() => setActive(1)}>Edit Slots</Button>
          </Box>
          <Box w="20vw">
            <Button onPress={() => setActive(2)}>Add Slots</Button>
          </Box>
        </HStack>
        {active === 0 && <AllBookings />}
        {active === 1 && <ChangeSlots />}
        {active === 2 && <AddSlots />}
      </Center>
    </VStack>
  );
};

export default AdminDashboard;
