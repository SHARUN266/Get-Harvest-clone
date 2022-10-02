import React, { Component } from 'react';
import axios from 'axios';

import { Box, Button, Flex, Heading, Input, Select, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';

class InvoiceForm extends Component {
  
  state = {
    client: 'client',
    invoiceId: 0,
    company:"",
    dueDate: 0,
    items:[
      {
        id:1,
        price: 0,
        service: "",
        quantity: 1,
        description: '',
        get amt() {
          return Number(this.price)*Number(this.quantity);
     }
      }
      
    ]
  }
  getProject=()=>{
    axios.get("https://getharvest-fake-api.herokuapp.com/projects").then((res)=>{
        this.setState({...this.state,clientdata:res.data})
    }).catch((err)=>{
      console.log("failed")
    })
 }
  flag=false
  handleChange = ({ target: { value, name }}) =>{
    if(this.state.clientdata===undefined){
      this.getProject()
    }
    this.setState({ [name]: value })}
  handleItemsChange=({ target: { value, name }},id)=>{
    this.state.items[id-1][name]=value
     this.setState({...this.state})
  }
  handleClick=(id)=>{
    this.state.items=this.state.items.filter((el)=>{
       return (el.id!==id) 
     })
    this.setState({...this.state})
  }
 
  handleAdd=()=>{
  this.state.items.push({
      id:this.state.items.length+1,
      price: 0,
      service: "",
      quantity: 1,
      description: '',
      get amt() {
        return Number(this.price)*Number(this.quantity);
   }
    })
    this.setState({...this.state})
  }
  // createAndDownloadPdf = () => {
  //   axios.post('/invoice/create-pdf', this.state)
  //     .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
  //     .then((res) => {
  //       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

  //       saveAs(pdfBlob, 'newPdf.pdf');
        
  //     })
  // }

  handleSave=()=>{
   if(this.state.client!=="client" && this.state.client!==""){
    axios.post("http://localhost:8080/invoice",this.state)
    .then((res)=>{
     this.flag=true
     this.setState({...this.state})
    }).catch((err)=>{
      alert("Please fill the form correctly")
    })
   
   }else{
    alert("Please fill the details correctly")
   }
  }
  cancelCh=()=>{
    return <Navigate to="/invoice" replace={true} />
  }
   tamount=()=>{
    let sum=0
    this.state.items.forEach((el)=>{
      sum=sum+Number(el.price)*Number(el.quantity)
    })
    return sum
   }
  render() {
    if(this.state.project===undefined){
      
    }
    if(this.state.client!=="client" && this.state.client!=="" && this.flag===true){
      return <Navigate to="/invoice/preview" replace={true} />
    }
    return (

      <Box w="90%" m="auto" my="30px">
        <Heading fontWeight="500" borderBottom="1px solid #dddd" pb="20px">New invoice for Example Client</Heading>
         
         <Flex w="100%" mt="30px">
          <Box w="50%" pr="15%">
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px" >
              <Text fontWeight="500" width={["100%","50%","40%"]}>Invoice ID</Text>
              <Input type="number" focusBorderColor="black" isRequired name="invoiceId" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px">
              <Text fontWeight="500"  width={["100%","50%","40%"]} >PO Number</Text>
              <Input type="number" focusBorderColor="black" name="poNumber" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px">
              <Text fontWeight="500"  width={["100%","50%","40%"]}>Issue Date</Text>
              <Input  type="date" focusBorderColor="black" name="issueDate" onChange={this.handleChange}/>
            </Flex>
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px">
              <Text fontWeight="500"  width={["100%","50%","40%"]}>Due Date</Text>
              <Input type="date" focusBorderColor="black" name="dueDate" onChange={this.handleChange}/>
            </Flex>
          </Box>
          <Box w="50%" pr="15%">
          <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px" >
              <Text fontWeight="500"  width={["100%","50%","40%"]}>Invoice From</Text>
              <Input type="text" focusBorderColor="black" name="company" isRequired onChange={this.handleChange}/>
            </Flex>
          <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px" >
              <Text fontWeight="500"  width={["100%","50%","40%"]}>Invoice For</Text>
              {/* <Input type="text" focusBorderColor="black" name="company" isRequired onChange={this.handleChange}/> */}
              <Select name="client" focusBorderColor="black" onChange={this.handleChange} placeholder='Select Client' mb="10px">
                {this.state.clientdata && this.state.clientdata.map((el)=>{
                  return  <option key={el._id} value={el.client}>{el.client}</option>
                    
                })}
                </Select>
            </Flex>
            
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px">
              <Text fontWeight="500"  width={["100%","50%","40%"]} >Tax</Text>
              <Flex align="center" w="100%">
              <Input  type="number" placeholder='0' focusBorderColor="black" name="tax" onChange={this.handleChange}/>
              <Text fontSize="24px" ml="10px">%</Text>
              </Flex>
            </Flex>
            <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" mb="10px">
              <Text fontWeight="500"  width={["100%","50%","40%"]} >Discount</Text>
              <Flex align="center" w="100%">
              <Input  type="number" placeholder='0' focusBorderColor="black" name="discount" onChange={this.handleChange}/>
              <Text fontSize="24px" ml="10px">%</Text>
              </Flex>
            </Flex>
          </Box>
         </Flex>

         <Flex justify="space-betwen" direction={["column","row","row"]} alignItems="center" my="20px" >
          <Text fontWeight="500" width={["20%","15%","11%"]} >Subject</Text>
          <Input type="text" name="subject" focusBorderColor="black" onChange={this.handleChange}/>
         </Flex>

         <TableContainer>
  <Table variant='simple' >
   
    <Thead>
      <Tr>
        <Th>Item Type</Th>
        <Th>Description</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Unit Price</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
    <Tbody >
      {this.state.items.map((el)=>{
       return <Tr key={el.id} >
        <Td w="20%" >
          <Flex alignItems="center"  justify="space-between">
          <Button size="sm" variant="outline" mr="5px" onClick={()=>this.handleClick(el.id)}>X</Button>
        <Select name="service" placeholder='Select option' onChange={(e)=>this.handleItemsChange(e,el.id)}>
          <option value='service'>Service</option>
          <option value='product'>Product</option>
        </Select>
        </Flex>
        </Td>
        <Td  w="50%"><Input w="100%" borderColor="#dddd" type="text" name="description" onChange={(e)=>this.handleItemsChange(e,el.id)} focusBorderColor="black"/></Td>
        <Td w="10%" ><Input size='md' defaultValue={1.00} min={1} focusBorderColor="black" name="quantity" onChange={(e)=>this.handleItemsChange(e,el.id)}/></Td>
        <Td w="10%" >$<Input size='md' defaultValue={0.00} min={1} focusBorderColor="black" name="price" onChange={(e)=>this.handleItemsChange(e,el.id)}/></Td>
        <Td w="10%" ><Text>${el.amt}.00</Text></Td>
        </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>
   <Flex justify="space-between" alignItems="center" mt="20px">
   <Button onClick={this.handleAdd} variant="outline" size="sm">Add Items</Button>
    <Box textAlign="right">
    <Text>Subtotal ${this.tamount()}.00</Text>
    <Text mt="20px" fontWeight="600">Amount Due ${this.tamount()}.00</Text>
    </Box>
   </Flex>
    <Box my="30px">
    <Text fontWeight="500">Notes (optional, displayed on invoice)</Text>
    <Textarea />
    </Box>
    <Flex mb="50px">
   <Button onClick={this.handleSave} colorScheme={"green"} mr="10px">Save Changes </Button>
    <Link to="/invoice"> <Button variant="outline">Cancel</Button></Link>
    </Flex>
   
      </Box>
    );
  }
}

export default InvoiceForm;
