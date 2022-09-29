import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Image,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Svg from "../Navbar/Svg";

export default function SimpleCard() {
  return (
    <>
      <Stack p="2rem" color={"font"} alignItems={"center"}>
        <Svg />
      </Stack>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Sign in to Harvest</Heading>
          </Stack>
          <Box bg="#fff8f1" border={"1px solid #ffa26c"} p={8}>
            <Stack
              p="10px"
              bg={"#fff"}
              borderRadius={"md"}
              border="1px solid rgba(29,30,28,.3)"
              direction={"row"}
              align={"center"}
              cursor={"pointer"}
              justifyContent={"center"}
            >
              <Image
                alt="GoogleSvg"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
              <Box
                w="90%"
                m="auto"
                fontSize={"18px"}
                textAlign={"center"}
                fontWeight={600}
              >
                Sign in with google
              </Box>
            </Stack>
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

            <Stack spacing={4} mt="5%">
              <FormControl id="email">
                <Input
                  bg="white"
                  border={"1px solid gray"}
                  type="email"
                  placeholder="Work email"
                />
              </FormControl>
              <FormControl id="password">
                <Input
                  bg="white"
                  border={"2px solid #111"}
                  type="password"
                  placeholder="Password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  bg={"#188433"}
                  color={"white"}
                  _hover={{
                    bg: "#188433",
                  }}
                  shadow={"sm"}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Stack
            color={"gray.500"}
            direction={{ base: "column", sm: "row" }}
            justify={"space-evenly"}
          >
            <Text>  Forgot Password?</Text>
            <Text>Term & condition</Text>
            <Text>Privacy Policy</Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
