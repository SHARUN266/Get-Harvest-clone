import { Box, Button, Flex, Heading, Highlight, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
function InvoicePreview(props) {
    const today = new Date()
    return (
        <Box w="90%" m="auto">
            <Flex justify="space-between" alignItems="center">
                <Box>
                    <Heading fontWeight="500">Invoice</Heading>
                    <Text>Latest activity: Invoice created. Faizan Ghani on 30/09/2022 at 12:37pm</Text>
                </Box>
                <Flex>
                    <Button variant="outline">PDF</Button>
                    <Button variant="outline">Download</Button>
                </Flex>
            </Flex>
            <Flex mt="50px" justify="space-between" alignItems="center">
                <Box></Box>
                <Box>Balance: </Box>
            </Flex>
            <Box w="100%"  p="50px" boxShadow='base' border="1px solid #CCCCCC">
                <Flex justify="space-between" alignItems="center">
                    <Heading fontWeight="700">INVOICE</Heading>
                    <Flex justify="end" alignItems="center">
                        <Text color="#555555" pr="10px" borderRight="1px solid #CCCCCC" mr="10px">Invoice For</Text>
                        <Text fontWeight='500'>Client</Text>
                    </Flex>
                </Flex>
                <Flex justify="space-between" alignItems="center" mt="30px">
                    <Box w="40%">
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Invoice ID</Text>
                        <Text fontWeight='500'>clear</Text>
                    </Flex>
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Issue Date</Text>
                        <Text >clear</Text>
                    </Flex>
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Due Date</Text>
                        <Text>clear</Text>
                    </Flex>
                    </Box>
                    <Box w="40%">
                    <Flex justify="end" alignItems="center">
                        <Text color="#555555" pr="10px" borderRight="1px solid #CCCCCC" mr="10px">Invoice For</Text>
                        <Text fontWeight='500'>Client</Text>
                    </Flex>
                    
                    </Box>
                </Flex>
                <TableContainer mt="40px">
                    <Table size='sm'>
                        <Thead>
                        <Tr >
                            <Th  borderRight="1px solid #CCCCCC">Item Type</Th>
                            <Th w="50%" borderRight="1px solid #CCCCCC">Description</Th>
                            <Th  borderRight="1px solid #CCCCCC" isNumeric>Quantity</Th>
                            <Th  borderRight="1px solid #CCCCCC" isNumeric>Unit Price</Th>
                            <Th  isNumeric>Amount</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td borderRight="1px solid #CCCCCC">inches</Td>
                            <Td borderRight="1px solid #CCCCCC">inches</Td>
                            <Td borderRight="1px solid #CCCCCC" isNumeric>25.4</Td>
                            <Td borderRight="1px solid #CCCCCC" isNumeric>25.4</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        </Tbody>
                       
                    </Table>
                    </TableContainer>
                   <Flex mt="20px" justifyContent="end" fontWeight="bold">
                   <Flex  gap="30px">
                        <Text>Amount Due</Text>
                        <Text>$0.00</Text>
                    </Flex>
                   </Flex>
            </Box>
        </Box>
    );
}

export default InvoicePreview;