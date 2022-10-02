import React, { useState } from "react";
import { FormControl, Text, Input, Stack, Button,Alert,AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../BackEnd/Firebase";
import { useAuth0 } from "@auth0/auth0-react";
/**
 * A function that handles the state of the email and password fields.
 * @param values - The state of the email and password fields.
 * @param setValues - A function that updates the state of the email and password fields.
 * @returns None
 */
export default function FormComp() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  /**
   * A function that handles the state of the email and password fields.
   * @param values - The state of the email and password fields.
   * @param setValues - A function that updates the state of the email and password fields.
   * @returns None
   */
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  /**
   * Handles changes to the filter configuration. 
   * @param e - the event object that is passed in when the input changes.
   * @returns None
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  /**
   * Handles the form submission.
   * @param e - the event object.
   * @returns None
   */
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
        /**
         * Signs in the user with their email and password. 
         * @param auth - The firebase auth object. 
         * @param email - The email of the user. 
         * @param password - The password of the user. 
         * @returns None 
         */
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(async (res) => {
            console.log(res);

            setLoading(false);
            navigate("/time");
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
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            {error === "" ? (
              ""
            ) : (
              <Alert status="error" color={"red"}>
                <AlertIcon />
                {error}
              </Alert>
            )}
          </Stack>
        </Stack>
        /**
         * A button that can be used to submit a form.  It can be used to submit a form, or to submit a form and then
         * display a loading spinner.  It can also be used to display a loading spinner and then submit a form.  It can
         * also be used to display a loading spinner and then submit a form and then display a loading spinner.  It can
         * also be used to display a loading spinner and then submit a form and then display a loading spinner and then
         * submit a form.  It can also be used to display a loading spinner and then submit a form and then display a
         * loading spinner and then submit a form and then
         */
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
