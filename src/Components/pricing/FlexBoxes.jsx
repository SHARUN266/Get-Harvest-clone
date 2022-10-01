import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./pricing.module.css";

const data = [
  {
    img: "https://res.cloudinary.com/spiralyze/image/upload/v1656310941/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/Money.svg",
    heading: "$7.4 billion",
    desc: "Lost per day due to incorrectly recorded work activities",
  },
  {
    img: "https://res.cloudinary.com/spiralyze/image/upload/v1656310706/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/less-admintime.svg",
    heading: "80%",
    desc: "Less admin with automated time tracking",
  },
  {
    img: "https://res.cloudinary.com/spiralyze/image/upload/v1656311111/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/Employee_Tracking.svg",
    heading: "$52,000",
    desc: "Extra billable time per employee with better time tracking",
  },
];

const FlexBoxes = () => {
  return (
    <div className={styles.flexDiv}>
      <Flex justify="space-between">
        {data.map((el) => (
          <Box className={styles.flexBox}>
            <Flex gap="20px">
              <Image src={el.img} />
              <Box>
                <Text fontSize="24pxF">{el.heading}</Text>
                <Text fontSize="14px" color="#6d6e6d">
                  {el.desc}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default FlexBoxes;
