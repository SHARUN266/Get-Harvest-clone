import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import butSty from "../Menubar/Menubar.module.css";
import styles from "./ProjectList.module.css";
const Banner = () => {
  return (
    <Box className={styles.banner}>
      <Img
        src="https://cache.harvestapp.com/static/illustrations/projects_onboard-B72A18E3.png"
        alt="0 project"
      />
      <Text w={['95%','95%','60%']}>
        Welcome to Projects! Here you can add and manage your team’s
        projects,review how time was spent, and track when you’re going over
        budget.
      </Text>
      <Link to='/projects/new-projects'><Button h="36px" variant className={butSty.createBut}>
        Create New Project
      </Button>
      </Link>
    </Box>
  );
};

export default Banner;
