import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Menubar from "../Components/Menubar/Menubar";
import ProjectList from "../Components/ProjectList/ProjectList";
import styles from "../Components/Menubar/Menubar.module.css";
const Projects = () => {
  return (
    <Box>
      <Menubar />
      <Text className={styles.heading}>Projects</Text>
      <Box p='16px'>
      <Flex direction={["column", "row", "row"]} gap='15px' justify="space-between" p='0 20px'>
          <Box>
            <Button h="36px" variant className={styles.importBut}>
              Active projects(1)
            </Button>
          </Box>
          <Box>
            <Flex direction={['column','row','row']} justify='left' gap='15px'>
              <Button h="36px" variant className={styles.importBut}>
                Filter by client
              </Button>
              <Button h="36px" variant className={styles.importBut}>
                Filter by manager
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <ProjectList />
    </Box>
  );
};

export default Projects;
