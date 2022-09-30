import React from "react";
import { Center, Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

export default function GoogleAuthButton() {
   const {loginWithRedirect}=useAuth0()
   const handleLogin=()=>{
    loginWithRedirect()

   }
  return (
    <Button display={'flex'} justifyContent="space-between" onClick={handleLogin} p="1rem" bg={"white"} w={"full"} variant={"outline"} >
      <FcGoogle  fontSize={'1.8rem'}/>
      <Center w="90%" textAlign={'center'} >
        <Text>Login with Google</Text>
      </Center>
    </Button>
  );
}
