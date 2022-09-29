import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Box, Flex, Heading, Input, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';


class InvoiceForm extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (

      <Box w="90%" m="auto">
        <Heading fontWeight="500" borderBottom="1px solid #dddd" pb="20px">New invoice for Example Client</Heading>
         
         <Flex w="100%" mt="30px">
          <Box w="50%" pr="15%">
            <Flex justify="space-betwen" alignItems="center" mb="10px" >
              <Text fontWeight="500" width="40%">Invoice ID</Text>
              <Input type="number" focusBorderColor="black" name="invoiceId" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" alignItems="center" mb="10px">
              <Text fontWeight="500" width="40%" >PO Number</Text>
              <Input type="number" focusBorderColor="black" name="poNumber" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" alignItems="center" mb="10px">
              <Text fontWeight="500" width="40%">Issue Date</Text>
              <Input  type="date" focusBorderColor="black" name="issueDate" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" alignItems="center" mb="10px">
              <Text fontWeight="500" width="40%">Due Date</Text>
              <Input type="date" focusBorderColor="black" name="dueDate" onChange={this.handleChange}/>
            </Flex>
          </Box>
          <Box w="50%" pr="15%">
          <Flex justify="space-betwen" alignItems="center" mb="10px" >
              <Text fontWeight="500" width="40%">Invoice For</Text>
              <Input type="text" focusBorderColor="black" name="client" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" alignItems="center" mb="10px">
              <Text fontWeight="500" width="40%" >Tax</Text>
              <Flex align="center" w="100%">
              <Input type="number" placeholder='0' focusBorderColor="black" name="tax" onChange={this.handleChange}/>
              <Text fontSize="24px" ml="10px">%</Text>
              </Flex>
            </Flex>
            <Flex justify="space-betwen" alignItems="center" mb="10px">
              <Text fontWeight="500" width="40%" >Discount</Text>
              <Flex align="center" w="100%">
              <Input type="number" placeholder='0' focusBorderColor="black" name="discount" onChange={this.handleChange}/>
              <Text fontSize="24px" ml="10px">%</Text>
              </Flex>
            </Flex>
          </Box>
         </Flex>

         <Flex justify="space-betwen" alignItems="center" my="20px" >
          <Text fontWeight="500" width="11%" >Subject</Text>
          <Input type="text" name="subject" focusBorderColor="black" onChange={this.handleChange}/>
         </Flex>

         <TableContainer>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th>Item Type</Th>
        <Th>Description</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Unit Price</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      {/* <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
      {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
  </Table>
</TableContainer>

      </Box>
    );
  }
}

export default InvoiceForm;
