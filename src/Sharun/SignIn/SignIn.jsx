import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import Svg from "../Navbar/Svg";
import DividerComp from "./DividerComp";
import FormComp from "./FormComp";
import From from "./FormComp";
import GoogleAuthButton from "./GoogleAuthButton";

export default function SimpleCard() {
  document.title = "Sign In";
  return (
    <>
      <Stack p="2rem" color={"font"} alignItems={"center"}>
        <Svg />
      </Stack>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Sign in to Harvest</Heading>
          </Stack>
          <Box bg="#fff8f1" border={"1px solid #ffa26c"} p={8}>
            <GoogleAuthButton />

            <DividerComp />

            <FormComp />
          </Box>
          <Stack
            color={"gray.500"}
            direction={{ base: "column", sm: "row" }}
            justify={"space-evenly"}
          >
            <Text>Forgot Password?</Text>
            <Text>Term & condition</Text>
            <Text>Privacy Policy</Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
