import { AlertDialog, Box, Button, Text } from "native-base";
import React from "react";
import { HStack } from "native-base";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import moment from "moment";
import { db } from "../../firebase";
const BookingsCard = ({ data }) => {
  const date = data?.timestamp.toDate().toDateString();
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  const remove = (id) => {
    db.collection("Bookings")
      .doc(id)
      .delete()
      .then(() => {
        alert("Bookings removed successfully");
      });
  };
  return (
    <Box flex="1" shadow="6" pt="20" mt="6" rounded={"md"} pb="20" bg="#e5e5e5" width={"80vw"}>
      <HStack space={2} justifyContent="space-between" flex="1">
        <Box
          flex="0.5"
          justifyContent={"center"}
          alignItems="center"
          pointerEvents="cursor"
        >
          <AccountCircleIcon style={{ width: "30%", height: "30%" }} />
          <Text>{data?.name}</Text>
        </Box>
        <Box flex="0.5" alignItems={'center'}  justifyContent={'center'}>
          <Text fontSize={"md"}>Address: {data?.address}</Text>
          <Text fontSize={"md"}>Phone: {data?.phone}</Text>
          <Text fontSize={"md"}>Booking On :{date}</Text>
          <Button
            onPress={() => remove(data.id)}
            width="40%"
            colorScheme="danger"
            alignSelf={"center"}
          >
            Delete
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default BookingsCard;
