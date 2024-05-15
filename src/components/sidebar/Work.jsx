import { Box, Text} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const Work = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      borderRadius={5}
      color="gray.500"
      gap={1}
      cursor="pointer"
      w="100%"
      _hover={{
        bg: "gray.700",
        color: "gray.50",
      }}
    >
      <FaBriefcase />

      <Text fontSize="10px">Work</Text>
    </Box>
  );
};
export default Work;
