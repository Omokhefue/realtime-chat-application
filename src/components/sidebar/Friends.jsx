import { Box, Text } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

const Friends = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
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
      <FaUsers /> {/* Adjust style as needed */}
      <Text fontSize="10px">Friends</Text>
    </Box>
  );
};
export default Friends;
