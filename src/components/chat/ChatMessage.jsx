import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

const ChatMessage = ({ authUserText = true }) => {
  return (
    <Flex gap="2" flexDir={authUserText ? "row-reverse" : "row"} mt={3}>
      <Avatar name={authUserText ? "Adejumo Temitope" : "Adejumo Omobolaji"} />
      <Box bg="gray.200" p={2} borderRadius={7} maxW="50%">
        <Text textAlign={"left"} fontSize={"xs"} fontWeight={"light"}>
          This semester needs to be over already. I need to go home. Let's go!
        </Text>
        <Text
          fontSize={9}
          color="blackAlpha.700"
          display="flex"
          justifyContent="flex-end"
        >
          12:34
        </Text>
      </Box>
    </Flex>
  );
};
export default ChatMessage;
