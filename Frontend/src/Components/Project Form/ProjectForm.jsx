import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import styles from "../Menubar/Menubar.module.css";
import formSty from "./Projects.module.css";
import Tasks from "./Tasks";
import Client from "./Client";
import { Link } from "react-router-dom";
import butSty from '../Menubar/Menubar.module.css'

const ProjectForm = ({changeHandler,projData,submitProjData}) => {
  return (
    <Box>
      <Text className={styles.heading}>New project</Text>
      <form className={formSty.form}>
        <Client changeHandler={changeHandler} client={projData.client} />
        <Flex direction={["column", "column", "row"]} p="10px">
          <label>Project name</label>
          <Input type="text" w="79%" onChange={changeHandler} name='projectName' value={projData.projectName} />
        </Flex>
        <Flex direction={["column", "column", "row"]} p="10px">
          <label>Project code</label>
          <Stack>
            <Input w="30%" type="text" onChange={changeHandler} name='projectCode' value={projData.projectCode}/>
            <Text color="grey">
              Optional. A code can help identify your project. You can use any
              combination of numbers or letters.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={["column", "column", "row"]} p="10px">
          <label>Date</label>
          <Stack direction="column">
            <Stack direction="row">
              <Input  type="date" placeholder="Start on" name='s_Date' value={projData.s_Date} onChange={changeHandler}  />
              <Text>To</Text>
              <Input  type="date" placeholder="End on" name='e_Date' value={projData.e_Date} onChange={changeHandler} />
            </Stack>
            <Text color="grey">
              Optional. You'll still be able to tack time outside of this date
              range.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={["column", "column", "row"]} p="10px">
          <label>Notes</label>
          <Stack w="86%">
            <Textarea type="textarea" h='80px' fontSize='14px' onChange={changeHandler} name='notes' value={projData.notes} />
            <Text color="grey">
              Optional. Notes are great for anything you need to reference
              later, like invoice schedules, which you can see when creating an
              invoice for Fixed Fee projects. Notes can only be seen by
              Administrators. Administrators can control access to notes in
              Settings.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={["column", "column", "row"]} p="10px">
          <label className={formSty.permission}>Permissions</label>
          <Stack>
            <RadioGroup name="permission" display='block' >
            <Radio size="md" mb='10px'  value='Show project report to Administrators and people who manage this project' colorScheme="orange" onChange={changeHandler}>
              <Text w="550px">
                Show project report to Administrators and people who manage this
                project
              </Text>
            </Radio>
            <Radio size="md" display='flex' value='Show project report to everyone on this project'  colorScheme="orange" onChange={changeHandler}>
              <Text w="550px" display='block'>
                Show project report to everyone on this project
              </Text>
            </Radio>
            </RadioGroup>
          </Stack>
        </Flex>
        <Tasks changeHandler={changeHandler} />
      <Box mt='20px'>
      <Link ><Button mr='10px' variant className={butSty.createBut} onClick={submitProjData}>Save project</Button></Link>
      <Link to='/projects'><Button variant className={butSty.importBut}>Cancel</Button></Link>
      </Box>  
      </form>
    </Box>
  );
};

export default ProjectForm;
