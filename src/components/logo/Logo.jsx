import { Box, Text } from "@chakra-ui/react";

const Logo = ({ size = "3xl" }) => {
  return (
    <Box p={3} borderRadius="md">
      <Text
        fontSize={size}
        fontWeight="bold"
        color="purple.400"
        letterSpacing="1px"
        fontFamily=" cursive"
      >
        CHITCHAT
      </Text>
    </Box>
  );
};
export default Logo;
