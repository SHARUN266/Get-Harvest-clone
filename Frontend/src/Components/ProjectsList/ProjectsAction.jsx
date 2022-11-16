import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import butStyles from "../Menubar/Menubar.module.css";
import {ChevronDownIcon} from '@chakra-ui/icons'
const ProjectsAction = ({data,updateHandler,deleteHandler}) => {
  return (
    <Box>
    <Menu>
  <MenuButton as={Button} h="36px" variant className={butStyles.importBut} rightIcon={<ChevronDownIcon />}
  >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>updateHandler(data._id,{"isPinned":!data.isPinned})}>{data.isPinned?'Pinned':'Pin'}</MenuItem>
    <MenuItem onClick={()=>updateHandler(data._id,{"isDuplicated":!data.isDuplicated})}>{data.isDuplicated?'Duplicated':'Duplicate'}</MenuItem>
    <MenuItem onClick={()=>updateHandler(data._id,{"isArchieved":!data.isArchieved})}>{data.isArchieved?'Archived':'Archive'}</MenuItem>
    <MenuItem onClick={()=>deleteHandler(data._id)}>Delete</MenuItem>
  </MenuList>
</Menu>
    </Box>
  )
}

export default ProjectsAction