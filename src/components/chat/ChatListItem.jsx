import {
  Avatar,
  Badge,
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  Icon,
} from "@chakra-ui/react";
// import Avatar from "react-avatar";

import { MdPushPin } from "react-icons/md";

const ChatListItem = () => {
  return (
    <Flex bg="blackAlpha.100" p={2} borderRadius={"10px"} w="100%">
      <Avatar src="" name="Samuel Adebayo" borderRadius={"15px"} />
      <Box ml="3" overflow={"hidden"}>
        <Flex>
          <Text fontWeight="bold" isTruncated maxW="70%" fontSize="sm">
            Segun Adebayo
          </Text>
          <Spacer />
          <Text color="gray.700" fontSize={10}>
            20m
          </Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-start"} w="100%">
          <Text fontSize="xs" isTruncated maxW="60%" color="gray.500">
            We need some visualizaions for the next years
          </Text>
          <Spacer></Spacer>
          <Flex>
            <Badge
              mr="1"
              ml="1"
              color="white"
              bg="red"
              p="2px 5px"
              borderRadius={"50%"}
              colorScheme="red"
            >
              3
            </Badge>
            <Icon
              as={MdPushPin}
              color="blue"
              style={{ transform: "rotate(50deg)" }}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default ChatListItem;
