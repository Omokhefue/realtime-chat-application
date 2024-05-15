import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        size={"sm"}
        type="email"
        value={inputs.email}
        onChange={e => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.username}
        onChange={e => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Fullname"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.fullname}
        onChange={e => setInputs({ ...inputs, fullname: e.target.value })}
      />

      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={e => setInputs({ ...inputs, password: e.target.value })}
        />

        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )} */}
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign up
      </Button>
    </>
  );
};
export default Signup;
