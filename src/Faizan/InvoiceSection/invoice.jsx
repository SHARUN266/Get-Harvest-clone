import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Invoice(props) {
  
    return (
        <Box w="80%" m="auto" mt="30px">
            <Heading mb="10px" fontWeight="500" >Invoices</Heading>
            <Link to="/invoice/new"><Button colorScheme="green" size="sm" backgroundColor="#11742A">+ New Invoice</Button></Link>
            <Box backgroundColor="#EFEFEF" mt="50px" w="100%" h="400px" p="50px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Image w="20%" h="200px" src="https://cache.harvestapp.com/static/illustrations/invoices_onboard-7269B096.png" alt="error"/>
                <Text color="rgba(29, 30, 28, 0.7)">Create customized (and handsome!) invoices in under a minute.</Text>
                <Text color="rgba(29, 30, 28, 0.7)"> With online payment, you’ll get paid twice as fast.</Text>
            </Box>
        </Box>
    );
}

export default Invoice;