import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";

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
      >
        <Grid templateColumns="repeat(8, 1fr)">
          <GridItem colSpan={{ md: 3 }} />
          <GridItem colSpan={{ md: 5 }}></GridItem>
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
