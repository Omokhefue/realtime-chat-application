import { Box, Flex, Icon, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaEllipsisV, FaPhone, FaSearch } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
      <Flex alignItems={"center"} justifyContent={"center"} gap={1}>
        <Avatar name="Adejumo Temitope" />
        <Flex flexDir="column" alignItems={"flex-start"}>
          <Text>Adejumo Temitope</Text>
          <Text fontWeight={"400"} fontSize={11} color="gray.400">
            Currently writing a bio
          </Text>
        </Flex>
      </Flex>
      <Spacer />
      <Flex gap={3}>
        <Icon as={FaSearch} />
        <Icon as={FaPhone} />
        <Icon as={FaEllipsisV} />
      </Flex>
    </Flex>
  );
};
export default ChatHeader;
