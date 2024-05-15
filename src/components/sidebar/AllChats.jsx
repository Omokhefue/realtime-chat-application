import { Box, Text } from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";

const AllChats = () => {
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
      gap={1}
      w="100%"
      _hover={{
        bg: "gray.700",
        color: "gray.50",
      }}
    >
      <FaCommentDots /> {/* Adjust style as needed */}
      <Text fontSize="10px">All Chats</Text>
    </Box>
  );
};
export default AllChats;
