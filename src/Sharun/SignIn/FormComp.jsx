import React, { useState } from "react";
import { FormControl, Text, Input, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../BackEnd/Firebase";
import { useAuth0 } from "@auth0/auth0-react";
export default function FormComp() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      alert("You are already login!");
      navigate("/");
    } else {
      if (values.email === "") {
        setError("Please! Enter your email");
      } else if (values.password === "") {
        setError("Please! Enter your password");
      } else {
        setLoading(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(async (res) => {
            console.log(res);

            setLoading(false);
            navigate("/");
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message);
          });
      }
    }
  };
  return (
    <Stack spacing={4} mt="5%">
      <FormControl id="email">
        <Input
          name="email"
          onChange={(e) => handleChange(e)}
          bg="white"
          border={"1px solid gray"}
          type="email"
          placeholder="Work email"
        />
      </FormControl>
      <FormControl id="password">
        <Input
          name="password"
          onChange={(e) => handleChange(e)}
          bg="white"
          border={"2px solid #111"}
          type="password"
          placeholder="Password"
        />
      </FormControl>
      <Stack spacing={10}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          <Text color="red">{error}</Text>
        </Stack>
        <Button
          onClick={handleSubmit}
          loadingText="Please! wait..."
          isLoading={isLoading ? true : false}
          bg={"#188433"}
          color={"white"}
          _hover={{
            bg: "#188433",
          }}
          shadow={"sm"}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}
