//chats
//chat - chat footer, chat details, chat header
//chatList

import { Flex } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import Search from "./Search";

const ChatList = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Flex flexDir={"column"} gap={3} height="100%">
      <Search />
      <Flex
        flexDir={"column"}
        gap={3}
        overflowY={"scroll"}
      >
        {numbers.map(number => (
          <ChatListItem key={number} />
        ))}
      </Flex>
    </Flex>
  );
};
export default ChatList;
