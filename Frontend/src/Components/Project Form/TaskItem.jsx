import { Box, Checkbox, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Projects.module.css';
const TaskItem = ({task,delTask,changeHandler}) => {
 
  return (
    <Box>
      {
         task.map((e,ind)=>  
        <Box className={styles.taskItem} key={ind+1}>
        <Stack direction='row' >
      <Box className={styles.delBut} onClick={()=>delTask(ind)}>X</Box>
      <Text className={styles.taskhead}>{e.title}</Text>
        </Stack>
      <Checkbox colorScheme='orange' onChange={changeHandler} name='task' value={e.title}></Checkbox>
     </Box>   
          )
    }
    </Box>
  )
}

export default TaskItem