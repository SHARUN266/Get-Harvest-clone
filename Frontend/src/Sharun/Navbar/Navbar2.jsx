import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Svg from "./Svg";

import { useState } from "react";
import MyButton from "./Button";
import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

import SignInAvatar from "./SignInAvatar";

export default function Navbar2({ imageUrl, name, flag }) {
  const { isOpen, onToggle } = useDisclosure();
  const [navbar, setNavbar] = useState(false);
  /**
   * Changes the navbar background color depending on the scroll position.
   * @returns None
   */
  const ChangeNavBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeNavBackground);

  return (
    <Box
      /**
       * A function that returns the background color of the navbar.
       * @param base - the base color of the navbar.
       * @param md - the color of the navbar on medium devices.
       * @param lg - the color of the navbar on large devices.
       * @returns the background color of the navbar.
       */
      bg={{ base: "mdBgFrNav", md: "mdBgFrNav", lg: "font" }}
      zIndex={50}
      shadow={navbar ? "md" : "none"}
      position="sticky"
      top="0"
    >
      <Flex
        w={["100%", "100%", "80%"]}
        m="auto"
        color={"#111"}
        minH={"50px"}
        py={{ base: 2 }}
        px={{ base: 1 }}
        borderBottom={1}
        justifyContent="space-between"
        borderStyle={"none"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 0.4 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <SignInAvatar name={name} imageUrl={imageUrl} flag={flag} />
        </Stack>
        <Flex
          flex={{ base: 0.1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            bg={"gray"}
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon bg="none" color="#f2f2f2" w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          fontSize={"1.2vw"}
          fontWeight={400}
          _hover={{
            color: "gray.300",
          }}
          color={"#f2f2f2"}
          key={navItem.label}
        >
          <Link p={4} to={navItem.href}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link to={href} role={"group"} display={"block"} p={2} rounded={"md"}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex textAlign={"center"} direction={"column"} h="50vh" p="2rem 0rem">
        <Stack direction={"row"} justifyContent="space-between">
          <MyButton>
            <Link to="signin">Sign in</Link>{" "}
          </MyButton>
          <MyButton w="50%">
            {" "}
            <Link to="signup">Try Harvest free</Link>{" "}
          </MyButton>
        </Stack>
        <Spacer />
        <Text color="#f2f2f2">Get the mobile app:</Text>
        <Stack mt="2%" direction={"row"} justifyContent="space-between">
          <MyButton w="50%">
            {" "}
            <BsApple />{" "}
            <a href="https://apps.apple.com/us/app/harvest-time-expense-tracker/id355395846">
              iPhone
            </a>
          </MyButton>

          <MyButton w="50%">
            {" "}
            <AiFillAndroid />{" "}
            <a href="https://play.google.com/store/apps/details?id=com.harvestapp">
              Android
            </a>
          </MyButton>
        </Stack>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      borderBottom={"1px solid #f2f2f2"}
      p="5px"
      spacing={4}
      onClick={children && onToggle}
    >
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontSize={"2vw"} fontWeight={600} color="#f2f2f2">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
      label:"Home",
      href:"/"
  },
  {
    label: "Time",
    href: "/time",
  },

  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Invoices",
    href: "/invoice",
  },
];
