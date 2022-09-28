import { useState } from "react";

import { Box, Container, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import { ListHeader } from "./HeaderList";
import Forecast from "./forecast";
import { LogoComponent } from "./FooterLogo";
import SocialIcons from "./SocialIcons";
import { CommunityLink, CompanyLinks, HomeLinks } from "./FooterLink";

export default function Footer() {
  const [logo, setLogo] = useState(false);
  const WindoSizeScrollX = () => {
    if (window.innerWidth <= 900) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("resize", WindoSizeScrollX);
  return (
    <Box bg={"#111"} color={"#f2f2f2"}>
      <Container as={Stack} maxW={"6xl"} fontSize="1.2rem" py={10}>
        <SimpleGrid columns={[3, 3, 4]} spacing={8}>
          {logo ? "" : <LogoComponent />}

          <Stack align={"flex-start"}>
            {logo ? <ListHeader>Harvest</ListHeader> : ""}
            <ListHeader>Home</ListHeader>
            {HomeLinks.map((elem) => (
              <Link
                color="gray"
                _hover={{
                  color: "font",
                }}
                href={"#"}
              >
                {elem.text}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            {CommunityLink.map((elem) => (
              <Link
                color="gray"
                _hover={{
                  color: "font",
                }}
                href={"#"}
              >
                {elem.text}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            {CompanyLinks.map((elem) => (
              <Link
                color="gray"
                _hover={{
                  color: "font",
                }}
                href={elem.link}
              >
                {elem.text}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
      <Stack align={"center"}>
        <Forecast />

        <SocialIcons />
      </Stack>
    </Box>
  );
}
