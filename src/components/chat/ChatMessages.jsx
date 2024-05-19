import { Box } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  return (
    <Box overflow="scroll" h="500px">
      <ChatMessage authUserText={false} />
      <ChatMessage />
      <ChatMessage authUserText={false} />
      <ChatMessage />
      <ChatMessage authUserText={false} />
      <ChatMessage authUserText={false} />
      <ChatMessage />
      <ChatMessage authUserText={false} />
      <ChatMessage />
      <ChatMessage authUserText={false} />
      <ChatMessage authUserText={false} />
    </Box>
  );
};
export default ChatMessages;
