import {
  Box,
  Text,
} from "@chakra-ui/react";
import Menubar from "../Components/Menubar/Menubar";
import ProjectList from "../Components/ProjectList/ProjectList";
import styles from "../Components/Menubar/Menubar.module.css";
const Projects = () => {

  return (
    <Box>
      <Menubar project={true} />
      <Text className={styles.heading}>Projects</Text>
      <ProjectList />
    </Box>
  );
};

export default Projects;
