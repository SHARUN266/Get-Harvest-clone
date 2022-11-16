import { Box, Flex, Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import {SocialMediaIcons} from "./FooterLink"
export default function SocialIcons() {
  return (
    <Box
          p="2rem 0rem"
          display="flex"
          alignItems={"center"}
        
          w={["90%", "90%", "70%"]}
          flexDirection={["column-reverse","column-reverse","row"]}
        >
          <Box fontSize={"1.5rem"} color="gray">
            <Text>© 2006-2022 Harvest</Text>
          </Box>
          <Spacer />
          <Flex>
            {SocialMediaIcons.map((elem) => (
              <a href={elem.link}>
                <Flex
                  color="gray"
                  _hover={{
                    color: "font",
                  }}
                  fontSize={"20px"}
                  align={"center"}
                  gap="5px"
                  p="1rem"
                >
                  {elem.icon}
                  <Text>{elem.text}</Text>
                </Flex>
              </a>
            ))}
          </Flex>
        </Box>
  )
}
