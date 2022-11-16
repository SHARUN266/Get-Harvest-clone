import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ProjectDetailTable = ({task}) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead color="grey" bg="#eee">
            <Tr>
              <Th rowSpan="2">Billable tasks</Th>
              <Th>Hours</Th>
              <Th>Billable amount</Th>
              <Th>Costs</Th>
            </Tr>
          </Thead>
          <Tbody>
           {
            task && task.map((t,ind)=>
                <Tr key={ind+1}>
              <Td>{t.task}</Td>
              <Td>0.00</Td>
              <Td>$0.00</Td>
              <Td>$0.00</Td>
            </Tr>   
                   )
            }
          </Tbody>
          <Tfoot>
            <Tr>
              <Th rowSpan="2">Total</Th>
              <Th>0.00</Th>
              <Th>$0.00</Th>
              <Th>$0.00</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectDetailTable;
