import React from "react";
import { Center, Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
export default function GoogleAuthButton() {
  return (
    <Button bg={"white"} w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  );
}
