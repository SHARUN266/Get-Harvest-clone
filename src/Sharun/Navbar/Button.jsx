import React from 'react'
import { Button } from '@chakra-ui/react'
/**
 * A simple button component that can be used in the app. 
 * @param children - The text to display in the button. 
 * @returns A styled button. 
 
 */
export default function MyButton({children}) {
  return <Button bg="#4b4d4b" color={'#f2f2f2'} p="1rem 0rem" _hover={{
    bg:"gray"
  }} w="50%" fontWaight={600}>{children}</Button>
    
  
}
