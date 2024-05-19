import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <InputGroup bg="blackAlpha.300" borderRadius={"12px"} ml="5px" mr="5px">
      <InputLeftElement pointerEvents="none">
        <Icon as={FaSearch} color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search"
        variant="filled"
        _placeholder={{ color: "gray.600" }}
      />
    </InputGroup>
  );
};
export default Search;
