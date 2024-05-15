import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/auth/AuthForm";

const Auth = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} mt={6}>
      <Container maxW={"container.md"} padding={0}>
        <VStack spacing={4} align={"stretch"} flex={1}>
          <AuthForm />
          <Box textAlign={"center"}> Get the app</Box>
          <Flex gp={5} justifyContent={"center"}>
            <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
            <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};
export default Auth;
