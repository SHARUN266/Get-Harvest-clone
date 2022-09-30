import React from "react";
import { FormControl, Input, Stack, Button } from "@chakra-ui/react";

export default function FormComp() {
  return (
    <Stack spacing={4} mt="5%">
      <FormControl id="email">
        <Input
          bg="white"
          border={"1px solid gray"}
          type="email"
          placeholder="Work email"
        />
      </FormControl>
      <FormControl id="password">
        <Input
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
        ></Stack>
        <Button
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
