import { Box, Text } from "@chakra-ui/react";

import { FaUser } from "react-icons/fa"; 

const Profile = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      position="relative"
      borderRadius={5}
      cursor="pointer"
      color="gray.500"
      w="100%"
      gap={1}
      _hover={{
        bg: "gray.700",
        color: "gray.50",
      }}
    >
      <FaUser />
      <Text fontSize="10px">Profile</Text>
    </Box>
  );
};
export default Profile;
