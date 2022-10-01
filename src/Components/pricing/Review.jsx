import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./pricing.module.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    day: "5 days ago",
    desc: `"Harvest is great. It has LITERALLY changed the way we work. Makes our staffing and budgeting estimates VERY easy."`,
    writer: "Brock P.",
  },
  {
    day: "6 days ago",
    desc: `"We've tried using other solutions and end up coming back to Harvest. Exceptionally easy to use and does its job extremelly well."`,
    writer: "Mathew T.",
  },
  {
    day: "7 days ago",
    desc: `"I've tried numerours other invoicing tools but none compared to the stability, quality, and reliability of Harvest. You just can't beat it."`,
    writer: "Jonathan S.",
  },
];

const Review = () => {
  return (
    <div className={styles.reviewDiv}>
      <div className={styles.review}>
        <Flex alignItems="center" gap="20px" className={styles.smallerSize}>
          <Box
            backgroundColor="white"
            borderRadius="50%"
            fontSize="25px"
            padding="5px"
            cursor="pointer"
            _hover={{ backgroundColor: "#fa5d00", color: "white" }}
          >
            <MdKeyboardArrowLeft />
          </Box>
          <VStack className={styles.reviewBox1} spacing="17px">
            <Heading fontSize="24px" fontWeight="500">
              Excellent
            </Heading>
            <Flex justifyContent="center" gap="2px">
              <BsStarFill fontSize="24px" color="#ed4534" />
              <BsStarFill fontSize="24px" color="#ed4534" />
              <BsStarFill fontSize="24px" color="#ed4534" />
              <BsStarFill fontSize="24px" color="#ed4534" />
              <BsStarHalf fontSize="24px" color="#ed4534" />
            </Flex>
            <Text fontSize="16px" fontWeight="500">
              Based on 748 reviews
            </Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="https://res.cloudinary.com/spiralyze/image/upload/v1653544620/Harvest/4002_Harvest_Time_Tracking_LP_Lock_Hero_G2_Ribbon/logo-G2.svg" />
            </div>
          </VStack>
          {data.map((el) => (
            <VStack className={styles.reviewBox2} spacing="17px">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Flex textAlign="left" gap="1px">
                  <BsStarFill fontSize="24px" color="#ed4534" />
                  <BsStarFill fontSize="24px" color="#ed4534" />
                  <BsStarFill fontSize="24px" color="#ed4534" />
                  <BsStarFill fontSize="24px" color="#ed4534" />
                  <BsStarFill fontSize="24px" color="#ed4534" />
                </Flex>
                <Text textAlign="right" fontSize="13px" color="#9f9f9f">
                  {el.day}
                </Text>
              </div>
              <Text fontSize="14px" color="#6d6e6d" paddingRight="10px">
                {el.desc}
              </Text>
              <div className={styles.reviewHr}>
                <Text
                  paddingTop="15px"
                  fontSize="14px"
                  fontWeight="500"
                  borderTop="1px solid #d9d9d9"
                  position="absolute"
                  bottom="20px"
                >
                  {el.writer}
                </Text>
              </div>
            </VStack>
          ))}
          <Box
            backgroundColor="white"
            borderRadius="50%"
            fontSize="25px"
            padding="5px"
            cursor="pointer"
            _hover={{ backgroundColor: "#fa5d00", color: "white" }}
          >
            <MdKeyboardArrowRight />
          </Box>
        </Flex>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <button className={styles.toPlansButton}>
          <a href="#plans">{"Back to Plans & Pricing"}</a>
        </button>
      </div>
    </div>
  );
};

export default Review;
