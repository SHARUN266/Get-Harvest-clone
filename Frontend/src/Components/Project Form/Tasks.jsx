import { Box, Checkbox, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {Link} from 'react-router-dom';
import TaskItem from "./TaskItem";
import styles from './Projects.module.css';
import { useState } from "react";
const newTask=[
  {title:'Buisness Development'},
  {title:'Design'},
  {title:'Marketing'},
  {title:'Programming'},
  {title:'Project Management'},
]
const Tasks = ({changeHandler}) => {
const [task,setTask]=useState(newTask);
const addSelector=(e)=>{
  if(e.code==='Enter')
  setTask([...task,{title:e.target.value}]);
}
const delTask=(id)=>{
let newTask=task.filter((el,ind)=>ind!==id)
setTask(newTask);
}

  return (
    <Box m='10px'>
      <Text className={styles.task}>Tasks</Text>
      <TaskItem task={task} delTask={delTask} changeHandler={changeHandler}  />
        <Input type="text" mt='20px' w='80%' h='36px' placeholder='Add a task...' onKeyDown={addSelector} />
      <Text mt='40px' className={styles.task}>Team</Text>
      <Box className={styles.taskItem}>
        <Stack direction='row' >
      <Box className={styles.delBut}>X</Box>
      <Text className={styles.taskhead}>User Name</Text>
        </Stack>
      <Checkbox  defaultChecked colorScheme='orange' value='Buisness Development'></Checkbox>
     </Box> 
     <Text className={styles.taskhead}>Need to add other people to this project? <Link><span style={{color:'blue'}}>Invite them</span></Link> to Harvest!</Text>
    </Box>
  );
};

export default Tasks;
