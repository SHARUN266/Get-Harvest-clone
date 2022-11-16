import { Button, Flex, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import butSty from "../Menubar/Menubar.module.css";
const Client = ({changeHandler,client}) => {
const [showClient,setShowClient]=useState(true);
  return (
    <Flex direction={["column", "column", "row"]} p="10px" >
      <label>Client</label>
      <Flex w='80%' gap={5}>
        {showClient?
        <Select onChange={changeHandler} name='client' >
          <option value="">Choose a Client</option>
          <option value="abc">abc</option>
        </Select>:
        <Input type='text' placeholder="Add a Client" name='client' value={client} onChange={changeHandler} />
    }
        <Text fontSize="18px">or</Text>
        <Button variant className={butSty.importBut} onClick={()=>setShowClient(!showClient)}>
          {showClient?'+ Add a Client':'Choose a Client'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Client;
