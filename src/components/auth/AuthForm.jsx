import {
  Box,
  Image,
  VStack,
  Input,
  Button,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Box border="1px solid gray" borderRadius={4} padding={5} w='2xl'>
        <VStack spacing={4}>
          <Box p={3} borderRadius="md">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="purple.400"
              letterSpacing="1px"
              fontFamily=" cursive"
            >
              CHITCHAT
            </Text>
          </Box>{" "}
          {isLogin ? <Login /> : <Signup />}
          {/* --------- OR --------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.100"} />
            <Text>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.100"} />
          </Flex>
          <GoogleAuth prefix={isLogin ? "Login" : "Signup"} />
        </VStack>
      </Box>

      <Box border="1px solid gray" borderRadius={4} padding={7}>
        <HStack spacing={1} justifyContent={'center'}>
          <Text fontSize={15} color="gray.700">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>
          <Text
            fontSize={15}
            color="blue.800"
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log In"}
          </Text>
        </HStack>
      </Box>
    </>
  );
};
export default AuthForm;
