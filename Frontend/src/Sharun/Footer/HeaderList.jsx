import {Text} from "@chakra-ui/react"
export const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"xl"} mb={2}>
        {children}
      </Text>
    );
  };