import { Flex, Box } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import Profile from "./Profile";
import AllChats from "./AllChats";
import ArchivedChats from "./ArchivedChats";
import Friends from "./Friends";
import Work from "./Work";
import Logo from "../logo/Logo";
import Logout from "./Logout";
import Edit from "./Edit";

const Sidebar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDir="column"
      h="95%"
      mt={3}
    >
      <Box>
        <Logo size={"10px"} />
      </Box>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir="column"
        gap={4}
      >
        <AllChats />
        <ArchivedChats />
        <Friends />
        <Work />

        <Divider mt="auto" w="60%" mx="auto" />

        <Profile />
        <Edit />
      </Flex>

      <Logout />
    </Flex>
  );
};
export default Sidebar;
