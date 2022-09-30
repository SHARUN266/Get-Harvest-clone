import { Box } from '@chakra-ui/react'
import React from 'react'

import { Button,Text } from '@chakra-ui/react'

export const Compo = ({el}) => {
 
   

  return (
   <Box>
    <Box borderY={"1px solid red"} mt="100px"  >
     <Box display={"flex"} alignItems="center" >
        <Box ml="15px" >
            <Text align={"left"} color="#fb701e" fontSize="4xl">{el.title}</Text>
            <Box fontWeight={"500"} fontSize="22px" mt={"20px"} paddingRight="30px" >{el.para}</Box>
            <Button colorScheme={"orange"} size="lg" borderRadius={"10px"} fontFamily="MuotoWeb,sans-serif">{el.btn}</Button>
        </Box>
        <Box>
            <img src={el.img} alt="" />
        </Box>

     </Box>
     <Box display={"flex"} gap="50" ml="5px">
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src={el.img1} alt="" />
                    <Text fontSize={"26px"} >{el.title1}</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
               {el.para1}
            </Box>
        </Box>
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src={el.img2} alt="" />
                    <Text fontSize={"26px"}>{el.title2}</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
               {el.para2}
            </Box>
        </Box>
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src={el.img3} alt="" />
                    <Text fontSize={"26px"}>{el.title3}</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
               {el.para3}
            </Box>
        </Box>
        
     </Box>
     
     </Box>
     <Box mt="100px" display={"flex"} alignItems="center" ml="10px"  >
        <Box >
            <img style={{maxWidth:"375px",borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} src={el.img4}  alt="" />
        </Box>
        <Box>
            <Box fontSize={"30px"} fontWeight="400" ml="10px">
               
                {el.para4}               
                </Box>
            <Box ml="10px" fontSize={"20px"}>
            <strong>{el.name}</strong>
            <br />
           {el.work}
            </Box>
        </Box>
    </Box>
   </Box>
  )
}
