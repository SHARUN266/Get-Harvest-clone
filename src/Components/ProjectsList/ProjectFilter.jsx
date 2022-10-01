import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import butStyles from "../Menubar/Menubar.module.css";
import {ChevronDownIcon} from '@chakra-ui/icons'

const ProjectFilter = ({Actions,items,filterBy}) => {
  return (
    <Box>
    <Menu>
  <MenuButton as={Button} h="36px" variant className={butStyles.importBut} 
  rightIcon={<ChevronDownIcon />}
  >
    {Actions}
  </MenuButton>
  <MenuList>
    {
      items && items.map(item=>
            <MenuItem key={item} onClick={()=>filterBy(item)}>{item}</MenuItem>
            
            )
    }
  </MenuList>
</Menu>
    </Box>
  )
}

export default ProjectFilter