import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Banner from './Banner'
import styles from './ProjectList.module.css'
import ProjectTable from './ProjectTable'
import butStyles from "../Menubar/Menubar.module.css";
import ProjectFilter from './ProjectFilter'
import { useContext } from 'react';
import { ProjectData } from '../../Context/ProjectDataContext';
import { useEffect } from 'react';


const ProjectList = () => {
const {projectArr,projects,client,clearFilter,getProjects,updateHandler,deleteHandler,filterByClient}=useContext(ProjectData)
useEffect(()=>{
getProjects();
},[])
  return (
    <Box className={styles.projectList}>
       <Box p='16px'>
      <Flex direction={["column", "row", "row"]} gap='15px' justify="space-between" p='0 20px'>
          <Box>
            <Button h="36px" variant className={butStyles.importBut}>
              Active projects({projects.length})
            </Button>
          </Box>
          <Box>
            <Flex direction={['column','row','row']} justify='left' gap='15px'>
                { clearFilter && <Text cursor='pointer' textDecoration='underline' onClick={getProjects}>Clear Filter</Text>}              
                <ProjectFilter items={client}
               Actions='Filter by client' filterBy={filterByClient} />
              <ProjectFilter 
              items={projectArr} 
              Actions='Filter by projects' filterBy={filterByClient}/>
            </Flex>
          </Box>
        </Flex>
      </Box>
    {!projects && 
      <Banner /> 
    }
    <Box pl='20px'>
  {projects &&
    <ProjectTable updateHandler={updateHandler} projects={projects} deleteHandler={deleteHandler} />}
    </Box>
    </Box>
  )
}

export default ProjectList