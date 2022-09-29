import { Box, Img, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./Menubar.module.css";
const Searchbar = () => {
  return (
    <Box className={styles.searchbox} w='270px'>
      <span>
        <Img
          w="14px"
          src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png"
          alt="magnifier"
        />
      </span>
      <Input type="text"  placeholder="Search by projects or clients" border="0px" focusBorderColor="none" />
    </Box>
  );
};

export default Searchbar;
