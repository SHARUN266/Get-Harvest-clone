import { Box, Img, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectsAction from './ProjectsAction'

const ProjectTable = ({projects,updateHandler,deleteHandler}) => {
  const navigate=useNavigate();
  const navigateHandler=(id)=>{
    navigate(`/projects/${id}`)
  }
  return (
    <Box>
        <TableContainer>
  <Table size='md'>
    <Thead color='grey' bg='#eee' >
      <Tr >
        <Th rowSpan='2'>Client</Th>
        <Th></Th>
        <Th>Budget</Th>
        <Th >Spent</Th>
        <Th >Remaining</Th>
        <Th >Costs</Th>
        <Th ></Th>
      </Tr>
    </Thead>
    <Thead >
     
    </Thead>
      {projects.map(p=>
    <Tbody key={p._id}>
       <Tr color='grey' bg='#eee'>
        <Td >{p.client}</Td>
        <Td ></Td>
        <Td ></Td>
        <Td ></Td>
        <Td ></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
      <Tr > 
     <Td rowSpan='2' _hover={{cursor:"pointer"}} onClick={()=>navigateHandler(p._id)}>{p.isPinned && <Img w='20px' src='https://cdn-icons-png.flaticon.com/512/3091/3091197.png' alt='pin' />}[{p.projectCode}]{p.projectName}</Td>
        <Td></Td>
        <Td></Td>
        <Td >0.00</Td>
        <Td ></Td>
        <Td >$0.00</Td>
        <Td ><ProjectsAction deleteHandler={deleteHandler} updateHandler={updateHandler} data={p} /></Td>
      </Tr>
    </Tbody>
      )  }
  </Table>
</TableContainer>
    </Box>
  )
}

export default ProjectTable