import React from "react";
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  FormLabel,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import Svg from "../Navbar/Svg";
import bgImage from "./bg-Image.webp";
import GoogleAuthButton from "../SignIn/GoogleAuthButton";
import DividerComp from "../SignIn/DividerComp";
import FormSignUp from "./FormSignUp";
import PolicyPage from "./PolicyPage";

export default function SignUp() {
  return (
    <Box minH={"60vh"} bgImage={bgImage} bgRepeat="no-repeat" bgSize={"cover"}>
      <Flex
        m="auto"
        w={["100%", "100%", "70%"]}
        align={"center"}
        justify={"center"}
        bg={"transparent"}
      >
        <Stack spacing={8} mx={"auto"} w={"3xl"} py={12} px={6}>
          <Stack color={"font"} alignItems={"start"}>
            <Svg />
          </Stack>
          <Stack align={"start"}>
            <Heading fontSize={"4xl"}>Start your free 30-day trial.</Heading>
            <Text fontSize={"2xl"} color={"gray"}>
              Fully functional. No credit card required.
            </Text>
          </Stack>
          <Box bg="none" p={8}>
            <GoogleAuthButton />
            <DividerComp />
            <FormSignUp />
            <PolicyPage />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
