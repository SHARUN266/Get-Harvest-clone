import { Box, Stack } from "@chakra-ui/react";
import Svg from "../Navbar/Svg";

export   const LogoComponent = () => {
    return (
      <Stack spacing={6}>
        <Box>
          <Svg />
        </Box>
      </Stack>
    );
  };