import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const ChatFooter = () => {
  return (
    <InputGroup
      bg="blackAlpha.300"
      borderRadius={"12px"}
      ml="5px"
      mr="5px"
      mt="auto"
    >
      <InputLeftElement pointerEvents="none">
        <Icon as={FaSearch} color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Type a message"
        variant="filled"
        _placeholder={{ color: "gray.600" }}
      />
      <InputRightElement pointerEvents="none">
        <Icon as={FaSearch} color="gray.600" />
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatFooter;
