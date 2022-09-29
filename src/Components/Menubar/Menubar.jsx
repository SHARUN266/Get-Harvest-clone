import React from "react";
import Searchbar from "./Searchbar";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import styles from "./Menubar.module.css";
import { Link } from "react-router-dom";
const Menubar = () => {
  return (
    <Box className={styles.menubar}>
      <Flex direction={["column", "row", "row"]} gap='15px' justify="space-between" p='0 20px'>
        <Box>
          <Stack direction="row">
           <Link to='/projects/new-projects'><Button h="36px" variant className={styles.createBut}>
              <span>+</span>New Project
            </Button></Link>
            <Button h="36px" variant className={styles.importBut}>
              Import
            </Button>
            <Button h="36px" variant className={styles.importBut}>
              Export
            </Button>
          </Stack>
        </Box>
        {/* Project Detail Page  */}
        <Box display='none'>
        <Link to='/projects'><Button h="36px" variant className={styles.importBut}>
              <span></span>Back to Projects
            </Button></Link>
        </Box>
        <Box>
          <Searchbar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Menubar;
