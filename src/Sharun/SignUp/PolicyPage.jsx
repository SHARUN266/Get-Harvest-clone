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
    Link,
  } from "@chakra-ui/react";
  import { FormControl, Input, Button } from "@chakra-ui/react";
export default function PolicyPage() {
  return (
    <Stack mt="5%" color={"gray.500"} direction={"column"}>
    <Text fontSize={"md"}>
      Already a cutomer?{" "}
      <strong>
        {" "}
        <Link href="">Sign in</Link>{" "}
      </strong>{" "}
    </Text>
    <Text fontSize={"small"}>
      By creating an account, you agree to the Harvest{" "}
      <strong>   <Link href="https://www.getharvest.com/terms-of-service">Terms of service</Link></strong> and{" "}
    <strong>  <Link href="https://www.getharvest.com/privacy-policy">Privacy policy</Link></strong> .
    </Text>
  </Stack>
  )
}
