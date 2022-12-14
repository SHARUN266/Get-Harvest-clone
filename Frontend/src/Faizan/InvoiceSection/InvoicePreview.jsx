import { DownloadIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, CircularProgress, Flex, Heading, Hide, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import html2canvas  from 'html2canvas';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from "jspdf"
function InvoicePreview(props) {
    // const today = new Date()
    const [state,setState]=useState({})
    const [amt,setAmt]=useState(0)
    const [loading,setLoading]=useState(false)
    const Ref=useRef(null)
    const getInvoice = () => {
        setLoading(true)
        axios.get('https://toga-caterpillar.cyclic.app/invoice')
            .then((res)=>{
                
                let total=0
                res.data[res.data.length-1].items.forEach((el)=>{
                    total=total+(Number(el.quantity)*Number(el.price))
                 })
            setState(res.data[res.data.length-1])
            setAmt(total)
            setLoading(false)
            })
        }
     
    const createAndDownloadPdf = () => {
        window.html2canvas=html2canvas
    var doc=new jsPDF("p","pt","a4")
    doc.html(Ref.current,{
        callback: function(pdf){
            pdf.save("Invoice.pdf")
        }
    })
  }
        useEffect(()=>{
             getInvoice()
             
        },[])
       
     if(loading===true){
        return <Box w="90%" display="flex" justifyContent="center" m="auto" pt="100px">
             <CircularProgress isIndeterminate size='200px' color='#FA5D00' />
        </Box>
     }
    return (
        
        <Box w="90%" m="auto" my="50px" overflowX="scroll">
            <Flex justify="space-between" flexDirection={["column","row","row"]} alignItems="center">
                <Box>
                    <Heading fontWeight="500">Invoice</Heading>
                    <Flex textAlign="left" wrap="wrap" alignItems="center">
                        <Text fontWeight="500" mr="5px">Latest activity: </Text>
                        <Text>Invoice created. </Text>
                        <Text mr="5px" fontWeight="500">{state.company}</Text>
                        <Text >  on {state.issueDate}</Text>
                    </Flex>
                </Box>
                <Flex>
                    <Link to="/invoice/new"><Button variant="outline" mr="5px">Edit<Icon ml="5px" as={EditIcon}/></Button></Link>
                    <Button variant="outline" onClick={createAndDownloadPdf} >PDF<Icon ml="5px" as={DownloadIcon}/></Button>
                </Flex>
            </Flex>
           
            <Box  ref={Ref} w="595px" maxHeight="836px" m="auto" my="50px" p="50px" boxShadow='base' border="1px solid #CCCCCC">
                <Flex justify="space-between" alignItems="center">
                    <Heading fontWeight="700">INVOICE</Heading>
                    <Flex justify="end" alignItems="center">
                        <Text color="#555555" pr="10px" borderRight="1px solid #CCCCCC" mr="10px">Invoice From</Text>
                        <Text fontWeight='500'>{state.company}</Text>
                    </Flex>
                </Flex>
                <Flex justify="space-between" alignItems="center" mt="30px">
                    <Box w="40%">
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Invoice ID</Text>
                        <Text fontWeight='500'>{state.invoiceId}</Text>
                    </Flex>
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Issue Date</Text>
                        <Text >{state.issueDate}</Text>
                    </Flex>
                    <Flex textAlign="left" alignItems="center">
                        <Text w="100px" color="#555555" borderRight="1px solid #CCCCCC" mr="10px">Due Date</Text>
                        <Text>{state.dueDate}</Text>
                    </Flex>
                    </Box>
                    <Box w="40%">
                    <Flex justify="end" alignItems="center">
                        <Text color="#555555" pr="10px" borderRight="1px solid #CCCCCC" mr="10px">Invoice For</Text>
                        <Text fontWeight='500'>{state.client}</Text>
                    </Flex>
                    
                    </Box>
                </Flex>
               
  

                <TableContainer mt="40px" overflowX="none" overflowY="none">
                    <Table size='sm' overflowX="none" overflowY="none">
                        <Thead>
                        <Tr >
                            <Th color="black"  borderRight="1px solid #CCCCCC">Item Type</Th>
                            <Th color="black" w="50%" borderRight="1px solid #CCCCCC">Description</Th>
                            <Th color="black"  borderRight="1px solid #CCCCCC" isNumeric>Quantity</Th>
                            <Th color="black" borderRight="1px solid #CCCCCC" isNumeric>Unit Price</Th>
                            <Th color="black"  isNumeric>Amount</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {state.items && state.items.map((el)=>{
                            return <Tr key={el._id}>
                            <Td borderRight="1px solid #CCCCCC">{el.service}</Td>
                            <Td borderRight="1px solid #CCCCCC">{el.description}</Td>
                            <Td borderRight="1px solid #CCCCCC" isNumeric>{el.quantity}</Td>
                            <Td borderRight="1px solid #CCCCCC" isNumeric>{el.price}</Td>
                            <Td isNumeric>{Number(el.quantity)*Number(el.price)}</Td>
                        </Tr>
                        })}
                        
                        </Tbody>
                       
                    </Table>
                    </TableContainer>
                   <Flex mt="20px" justifyContent="end" fontWeight="bold">
                   <Flex  gap="30px">
                        <Text>Amount Due</Text>
                        <Text>${amt}.00</Text>
                    </Flex>
                   </Flex>
            </Box>
           
        </Box>
    );
}

export default InvoicePreview;