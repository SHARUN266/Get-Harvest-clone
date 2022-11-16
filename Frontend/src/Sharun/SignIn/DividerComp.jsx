import React from 'react'
import { Box } from '@chakra-ui/react'
export default function DividerComp() {
  return (
    <Box
    lineHeight={0}
    m="32px 0"
    textAlign={"center"}
    borderBottom={"1px solid #c6c6c6"}
  >
    <span
      style={{
        background: "#fff8f1",
        padding: "0rem 1rem",
        color: "#4a4b49",
      }}
    >
      or with your email below
    </span>
  </Box>
  )
}
