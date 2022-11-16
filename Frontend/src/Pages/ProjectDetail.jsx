import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Menubar from '../Components/Menubar/Menubar'
import ProjectsAction from '../Components/ProjectsList/ProjectsAction'
import styles from '../Components/ProjectDetail/ProjectDetail.module.css';
import ProjectDetailTable from '../Components/ProjectDetail/ProjectDetailTable';
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../projects.api";
import { ProjectData } from '../Context/ProjectDataContext';

const ProjectDetail = () => {
const params=useParams();
const [single_projData,setSingle_ProjData]=useState({});
const [task,setTask]=useState([]);
const getProjectById=async ()=>{
    let res=await getDataById(params.id);
    setSingle_ProjData(res.data);
    setTask(res.data.task)
}
const {deleteHandler,updateHandler}=useContext(ProjectData);
useEffect(()=>{
    getProjectById();
},[deleteHandler,updateHandler])

  return (
    <Box>
      <Menubar projectDetail={true} />
     <Box className={styles.heading}>
        <Flex justify='space-between'>
        <Stack >
      <Text className={styles.clientName}>{single_projData.client}</Text>  
      <Text className={styles.projName}>[{single_projData.projectCode}]{single_projData.projectName}</Text>  
      <Text className={styles.date}>{single_projData.s_Date} - {single_projData.e_Date}</Text>  
      <Text className={styles.notes}>{single_projData.notes}</Text>  
        </Stack>
        <ProjectsAction deleteHandler={deleteHandler} updateHandler={updateHandler} data={single_projData} />
        </Flex>
    </Box> 
<Box p='40px'>
<ProjectDetailTable task={task}/>
</Box>     
    </Box>
  )
}

export default ProjectDetail