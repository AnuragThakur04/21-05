import { Box, Button, Center, Container, HStack } from "native-base";
import React, { useState } from "react";
import AddSlots from "../../Component/Admin/AddSlots";
import AllBookings from "./AllBookings";
import ChangeSlots from "./ChangeSlots";

const AdminDashboard = () => {
  const [active, setActive] = useState(0);
  return (
    <Center>
      <HStack space={3} justifyContent="center" mt="20">
        <Box w='20vw'>
          <Button onPress={() => setActive(0)}>All Bookings</Button>
        </Box>
        <Box w='20vw'>
          <Button onPress={() => setActive(1)}>Edit Slots</Button>
        </Box>
        <Box w='20vw'>
          <Button onPress={() => setActive(2)}>Add Slots</Button>
        </Box>
      </HStack>
      {active === 0 && <AllBookings />}
      {active === 1 && <ChangeSlots />}
      {active === 2 && <AddSlots />}
    </Center>
  );
};

export default AdminDashboard;
