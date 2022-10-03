import React from 'react'
import {
    Box,
    Button,
    Avatar,
    Center,
    Menu,
    Text,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";

import { signOut } from 'firebase/auth';
import { auth } from '../BackEnd/Firebase';
import LogoutButton from '../BackEnd/GoogleLogOut';
import { useAuth0 } from "@auth0/auth0-react";
export default function SignInAvatar({imageUrl,flag,name}) {


  const { user, isAuthenticated, isLoading } = useAuth0();
    // const handleLogOut=()=>{
    //     signOut(auth).then(()=>{
    //         alert("Your Log out successfully")
    //     }).catch((error)=>{
    //         alert("log out fail")
    //     })
    // }
  return (
    <Box p={["1rem", "1rem", "0rem"]}>
    {flag ? (
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar name={name} src={imageUrl} />
        </MenuButton>
       
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar size={"xl"} name={name} src={imageUrl} />
          </Center>
          <br />
          <Center>
            <p>{name}</p>
          </Center>
          <br />
          <MenuDivider />

          <MenuItem > <LogoutButton/> </MenuItem> 
        </MenuList>
      </Menu>
    ) : (
      ""
    )}

   
  </Box>
  )
}
