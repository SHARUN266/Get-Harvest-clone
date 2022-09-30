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
  ];
export default function FormSignUp() {
  return (
    <Stack spacing={4} mt="5%">
    {formNameLabel &&
      formNameLabel?.map((elem) => (
        <>
          <FormControl id="email">
            <Stack
              wordBreak={"normal"}
              direction={{ base: "column", md: "column", lg: "row" }}
            >
              <FormLabel>{elem.label}</FormLabel>
              <Spacer />
              <Input
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

    <FormControl id="password">
      <Stack
        wordBreak={"normal"}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <FormLabel>Password</FormLabel>
        <Spacer />
        <Input
          w={["auto", "auto", "70%"]}
          border={"2px solid #111"}
          bg="#ffff"
          type="password"
        />
      </Stack>
    </FormControl>
    <Stack spacing={10}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        align={"start"}
        justify={"space-between"}
      ></Stack>
      <Button
        bg={"#188433"}
        color={"white"}
        _hover={{
          bg: "#188433",
        }}
        shadow={"sm"}
      >
        Create my account
      </Button>
    </Stack>
  </Stack>
  )
}
