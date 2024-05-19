import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Container
      bg={"purple.200"}
      // bg={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('./bg.jpg')`}
      bgSize="cover"
      bgPos="center"
      minH="100vh"
      maxW="full"
      centerContent
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgAttachment="scroll"
    >
      <Outlet />
    </Container>
  );
};
export default PageLayout;
