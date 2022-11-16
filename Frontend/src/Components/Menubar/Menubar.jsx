import React from "react";
import Searchbar from "./Searchbar";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import styles from "./Menubar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProjectData } from "../../Context/ProjectDataContext";
import {CSVLink} from 'react-csv';
import { headers } from "./HeadersForExport";
const Menubar = ({project=false,projectDetail=false}) => {
  const {projects,searchHandler}=useContext(ProjectData)
  const csvLink={
    filename:'projects.csv',
    headers:headers,
    data:projects
  }
  return (
    <Box className={styles.menubar}>
      <Flex direction={["column", "row", "row"]} gap='15px' justify="space-between" p='0 20px'>
        <Box display={project?'block':'none'}>
          <Stack direction="row">
           <Link to='/projects/new-projects'><Button h="36px" variant className={styles.createBut}>
              <span>+</span>New Project
            </Button></Link>

            <Button h="36px" variant className={styles.importBut}>
              Import
            </Button>
           <CSVLink {...csvLink}>
            <Button h="36px" variant className={styles.importBut}>
              Export
            </Button>
           </CSVLink>
          </Stack>
        </Box>
        {/* Project Detail Page  */}
        <Box display={projectDetail?'block':'none'}>
        <Link to='/projects'><Button h="36px" variant className={styles.importBut}>
              <span></span>Back to Projects
            </Button></Link>
        </Box>
        <Box display={project?'block':'none'}>
          <Searchbar searchHandler={searchHandler} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Menubar;
