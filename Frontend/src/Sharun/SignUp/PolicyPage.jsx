import React from 'react'
import {
    Flex,
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    FormLabel,
    Spacer,
    
  } from "@chakra-ui/react";
  import { Link } from 'react-router-dom'
  import { FormControl, Input, Button } from "@chakra-ui/react";
/**
 * The main page for the policy page.
 * @returns A React component that renders the policy page.
 */
export default function PolicyPage() {
  return (
    <Stack mt="5%" color={"gray.500"} direction={"column"}>
    <Text fontSize={"md"}>
      Already a cutomer?{" "}
      <strong>
        {" "}
        <Link to="/signIn">Sign in</Link>{" "}
      </strong>{" "}
    </Text>
    <Text fontSize={"small"}>
      By creating an account, you agree to the Harvest{" "}
      <strong>   <a href="https://www.getharvest.com/terms-of-service">Terms of service</a></strong> and{" "}
    <strong>  <a href="https://www.getharvest.com/privacy-policy">Privacy policy</a></strong> .
    </Text>
  </Stack>
  )
}
