import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatList from "../../components/chat/ChatList";
import ChatWindow from "../../components/chat/ChatWindow";

const Dashboard = () => {
  return (
    <Grid
      w="90%"
      h="90vh"
      templateColumns="repeat(12, 1fr)"
      borderRadius={"30px"}
      bg={"#202022"}
      gap={2}
      padding={2}
      textAlign="center"
    >
      <GridItem
        colSpan={{
          sm: 1,
        }}
        borderRadius={"30px"}
        display={{ base: "none", sm: "inherit" }}
      >
        <Sidebar />
      </GridItem>

      <GridItem
        colSpan={{ base: 12, sm: 11, smmd: 6, md: 7, lg: 8 }}
        bg="#f9fafc"
        borderRadius={"30px"}
        height="100%"
      >
        <Grid
          templateColumns="repeat(8, 1fr)"
          color="black"
          gap={3}
          h="inherit"
          padding={3}
        >
          <GridItem colSpan={{ sm: 3, md: 3 }} height="570px">
            <ChatList />
          </GridItem>
          <GridItem colSpan={{ sm: 5, md: 5 }}>
            <ChatWindow />
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem
        colSpan={{ smmd: 5, md: 4, lg: 3 }}
        bg="#f9fafc"
        display={{ base: "none", smmd: "inherit" }}
        borderRadius={"30px"}
      ></GridItem>
    </Grid>
  );
};
export default Dashboard;
