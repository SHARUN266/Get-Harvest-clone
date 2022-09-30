import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ProjectForm from '../Components/Project Form/ProjectForm'
import { addData } from '../projects.api'

const projInit={
  client:'',
  projectName:'',
  projectCode:'',
  s_Date:'',
  e_Date:'',
  notes:'',
  permission:'',
  task:[],
}

const NewProject = () => {
const [projData,setProjData]=useState(projInit);
const navigate=useNavigate();
const changeHandler=(e)=>{
const {name,value}=e.target;
setProjData({...projData,[name]:value});
if(e.target.checked){
  setProjData({...projData,task:[...projData.task,{[name]:value}]}); 
}
}
const submitProjData=async ()=>{
let res=await addData(projData);
navigate('/projects')
}
  return (
    <Box>
<ProjectForm changeHandler={changeHandler} projData={projData} submitProjData={submitProjData} />
    </Box>
  )
}

export default NewProject