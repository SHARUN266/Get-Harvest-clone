import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteData, filterClient, getData, searchBy_Client_Project, updateData } from '../projects.api';
export const ProjectData=createContext();
const ProjectDataContext = ({children}) => {

  const [projectArr,setProjectArr]=useState([]);

  const [flag,setFlag]=useState(false)
    const [projects,setProjects]=useState([]);

  const [client,setClient]=useState([]);
  const [clearFilter,setClearFilter]=useState(false)
  const navigate=useNavigate();
  const getProjects=async ()=>{
    setClearFilter(false);
  let res=await getData();
  setProjects(res.data);
  setClient(res.data.map(el=>el.client));
  setProjectArr(res.data.map(el=>el.projectName));
}
const updateHandler=async (id,newStatus)=>{
 let res= await updateData(id,newStatus);
 getProjects();
}
const deleteHandler=async (id)=>{
 let res=await deleteData(id);
 navigate('/projects');
 getProjects();
}
const filterByClient=async (c)=>{
  setClearFilter(true);
  let res=await filterClient(c);
  setProjects(res.data);
  }
const searchHandler=async (q)=>{
  let res=await searchBy_Client_Project(q);
  
  setProjects(res.data);
}   

/// AuthCode
const ChangeFlagStateToTrue=()=>{

  setFlag(true)
}
const ChangeFlagStateToFalse=()=>{
  setFlag(false)
}
  return (

    <ProjectData.Provider value={{flag,ChangeFlagStateToTrue,ChangeFlagStateToFalse,projects,client,clearFilter,getProjects,updateHandler,deleteHandler,filterByClient,searchHandler}}>

     {children}
    </ProjectData.Provider>
  )
}

export default ProjectDataContext