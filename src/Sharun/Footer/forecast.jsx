import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Forecast() {
  return (
    <Box
    textAlign={"center"}
    cursor={"pointer"}
    _hover={{
      bg: "gray.800",
    }}
    color="gray"
    w={["100%", "95%", "70%"]}
    m="auto"
    bg={"none"}
    p="1rem"
    borderRadius={"16px"}
    border="1px solid gray"
  >
    <a href="https://www.getharvest.com/forecast">
      We also make:<strong>Harvest Forecast</strong>- the fast and simple
      way to schedule your team across projects.
    </a>
  </Box>
  )
}
