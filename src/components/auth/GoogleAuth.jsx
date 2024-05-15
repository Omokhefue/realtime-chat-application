import { HStack, Image, Text } from "@chakra-ui/react";

const GoogleAuth = ({ prefix }) => {
  return (
    <HStack cursor={"pointer"} spacing={2}>
      <Image src="/google.png" w={5} alt="Google logo" />
      <Text color="blue.800">{prefix} with Google</Text>
    </HStack>
  );
};
export default GoogleAuth;
