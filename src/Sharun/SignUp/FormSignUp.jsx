import React from "react";
import { Stack, Text,Alert,AlertIcon, FormLabel, Spacer } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../BackEnd/Firebase";
import { useNavigate } from "react-router-dom";

/**
 * Returns an array of objects containing the label, type, and name of each input field.
 * @returns An array of objects containing the label, type, and name of each input field.
 */
const formNameLabel = [
  {
    label: "First name",
    type: "firstname",
    name: "firstname",
  },
  {
    label: "Last name",
    type: "lastname",
    name: "lastname",
  },
  {
    label: "Company name",
    type: "text",
    name: "companyname",
  },
  {
    label: "Work email",
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
  },
];
export default function FormSignUp() {
  /**
   * A function that handles the submission of the form.
   * @param event - The event object.
   */
  const { isAuthenticated } = useAuth0();
  /**
   * Navigates to the given URL.
   * @param url - the URL to navigate to.
   * @returns None
   */
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
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
      alert("You are already Sign Up!");
      navigate("/");
    } else {
      if (
        values.firstname === "" ||
        values.lastname === "" ||
        values.email === "" ||
        values.companyname === "" ||
        values.password === ""
      ) {
        setError("You need to fill all blanks");
        return;
      } else {
        setLoading(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(async (res) => {
            console.log(res);
            const user = res.user;
            await updateProfile(user, {
              displayName: values.firstname,
            });
            navigate("/time");
            setLoading(false);
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
      {formNameLabel &&
        formNameLabel?.map((elem, i) => (
          <>
            <FormControl key={elem + i} id="email">
              <Stack
                wordBreak={"normal"}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <FormLabel>{elem.label}</FormLabel>
                <Spacer />
                <Input
                  onChange={(e) => handleChange(e)}
                  w={["auto", "auto", "70%"]}
                  border={"2px solid #111"}
                  bg="#ffff"
                  type={elem.type}
                  name={elem.name}
                />
              </Stack>
            </FormControl>
          </>
        ))}

      <Stack spacing={10}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          {
            error===""?"": <Alert status='error' color={'red'}>
            <AlertIcon />
            {error}
          </Alert>
          }
          
        </Stack>
        /**
         * A button that can be used to submit a form.  It can be used to submit a form, or to submit a form
         * while the form is loading.  It can also be used to display a loading message.  It can also be used
         * to display a loading message while the form is loading.  It can also be used to display a loading
         * message while the form is loading.  It can also be used to display a loading message while the
         * form is loading.  It can also be used to display a loading message while the form is loading.  It
         * can also be used to display a loading message while the form is loading.  It can also be used to
         *
         */
        <Button
          bg={"#188433"}
          color={"white"}
          _hover={{
            bg: "#188433",
          }}
          shadow={"sm"}
          onClick={handleSubmit}
          loadingText="Please! wait..."
          isLoading={isLoading ? true : false}
        >
          Create my account
        </Button>
      </Stack>
    </Stack>
  );
}
