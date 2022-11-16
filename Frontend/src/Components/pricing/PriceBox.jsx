import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./pricing.module.css";
import proPng from "./pro-option.png";

const PriceBox = ({ data,bg }) => {
  return (
    <div className={bg ? styles.priceBoxWithBG : styles.priceBox}>
      <Flex justifyContent="space-between" marginBottom="32px">
        <Box>
          <Heading
            margin="0px 0px 40px 0px"
            fontSize="32px"
            fontWeight="400"
            color="#fa5d00"
          >
            {data.heading1}
          </Heading>
          <Box>
            <Text>{data.seat}</Text>
            <Text>{data.projects}</Text>
          </Box>
        </Box>
        <Box>
          <Flex>
            <Text fontSize="32px">$</Text>
            <Flex>
              <Heading fontSize="68px" fontWeight="400">
                {data.price1}
              </Heading>
              <Text fontSize="36px" marginTop="24px">
                {data.price2}
              </Text>
            </Flex>
          </Flex>
          <Text color="#6D6E6D" fontSize="14px">
            {data.extra1}
          </Text>
          <Text color="#6D6E6D" fontSize="14px">
            {data.extra2}
          </Text>
        </Box>
      </Flex>
      <button className={styles.priceButton}>30-day free trial</button>
      <Text color="#6D6E6D" textAlign="center">
        No credit card required
      </Text>
    </div>
  );
};

export default PriceBox;
