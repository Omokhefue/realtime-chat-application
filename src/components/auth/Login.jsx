import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        size={"sm"}
        type="email"
        value={inputs.email}
        onChange={e => setInputs({ ...inputs, email: e.target.value })}
        colorScheme='purple'
      />
      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={e => setInputs({ ...inputs, password: e.target.value })}
      />
      {/* {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )} */}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Log in
      </Button>
    </>
  );
};
export default Login;
