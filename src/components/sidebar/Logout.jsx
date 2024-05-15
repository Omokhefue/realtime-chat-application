import { Box, Text } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      borderRadius={5}
      color="gray.500"
      w="100%"
      cursor='pointer'
      gap={1}
      _hover={{
        bg: "gray.700",
        color: "gray.50",
      }}
    >
      <FaSignOutAlt style={{  transform: "scaleX(-1)" }} />{" "}
      {/* Adjust style as needed */}
      <Text fontSize="10px">Logout</Text>
    </Box>
  );
};
export default Logout;
