import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'
import styles from './ProjectList.module.css'
// import ProjectTable from './ProjectTable'

const ProjectList = () => {
  return (
    <Box className={styles.projectList}>
    <Banner />
    <Box>
  {/* <ProjectTable /> */}
    </Box>
    </Box>
  )
}

export default ProjectList