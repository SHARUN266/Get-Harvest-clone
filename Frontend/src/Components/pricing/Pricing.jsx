import { Box, Button, Flex, Heading, Switch, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./pricing.module.css"
import PriceBox from "./PriceBox";
import CompanyLogo from "./CompanyLogo";
import FeaturesGrid from "./FeaturesGrid";
import FlexBoxes from "./FlexBoxes";
import FAQ from "./FAQ";
import Review from "./Review";

let data = [
  {
    heading1: "Free",
    price1: "0",
    price2: "",
    seat: "1 seat",
    projects: "2 projects",
    extra1: "forever",
    extra2: "",
  },
  {
    heading1: "Pro",
    price1: "12",
    price2: "",
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    extra1: "per seat per month",
    extra2: "",
  },
  {
    heading1: "Pro",
    price1: "10",
    price2: ".80",
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    extra1: "per seat per month,",
    extra2: "billed yearly",
  },
];

const Pricing = () => {

  document.title = "Pricing";

  const [plan, setPlan] = useState(false);

  return (
    <div className={styles.container}>
      <Heading fontSize="50px" fontWeight="400" textAlign="center">
        <a id="plans">Pricing</a>
      </Heading>
      <br />
      <Flex gap="15px" alignItems="center" justifyContent="center">
        <Text fontSize="18px">Monthly</Text>
        <Switch
          colorScheme="red"
          size="lg"
          onChange={(e) => setPlan(e.target.checked)}
          sx={{
            "span.chakra-switch__track:not([data-checked])": {
              backgroundColor: "#fa5d00",
            },
          }}
        />
        <Text fontSize="18px">Annual</Text>
      </Flex>
      <Text color="#6D6E6D" padding="16px 0px 41px 0px" textAlign="center">
        Save <span style={{ color: "black" }}>10%</span> with annual plan
      </Text>
      <Flex justifyContent="center" gap="40px" paddingBottom="77px">
        <PriceBox data={data[0]} bg={false}/>
        {plan ? <PriceBox data={data[2]} bg={true}/> : <PriceBox data={data[1]} bg={true}/>}
      </Flex>
      <CompanyLogo opacity={0.4} />
      <Box borderTop="1px solid #fa5d00" width="100%" marginTop="2rem"></Box>
      <Heading
        textAlign="center"
        fontSize="42px"
        margin="80px 0px 40px 0px"
        fontWeight="300"
      >
        Features
      </Heading>
      <FeaturesGrid />
      <Box className={styles.hr} />
      <FlexBoxes />
      <Box borderTop="1px solid #fa5d00" width="100%" marginTop="2rem"></Box>
      <FAQ />
      <Box borderTop="1px solid #fa5d00" width="100%"></Box>
      <Review />
      
    </div>
  );
};

export default Pricing;
