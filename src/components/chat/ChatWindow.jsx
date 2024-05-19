import { Flex } from "@chakra-ui/react";
import ChatFooter from "./ChatFooter";
import ChatMessages from "./ChatMessages";
import ChatHeader from "./ChatHeader";

const ChatWindow = () => {
  return (
    <Flex flexDir="column" height="100%">
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </Flex>
  );
};
export default ChatWindow;
