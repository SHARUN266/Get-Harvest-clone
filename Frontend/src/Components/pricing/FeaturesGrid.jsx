import { Box, VStack, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./pricing.module.css";

const data = [
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/time-tracking.svg",
    heading: "Time Tracking",
    desc: "Start and stop tracking with 1-click. Apps for desktop, mobile, and web browser.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reminders.svg",
    heading: "Reminders",
    desc: "Subtle reminders to track time. Never lose another hour.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Invoicing.svg",
    heading: "Invoicing",
    desc: "Automatically create invoices from tracked time and expenses.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Online-Payments.svg",
    heading: "Online Payments",
    desc: "Accept online payments. Sync with QuickBooks and Xero.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reporting.svg",
    heading: "Reporting",
    desc: "Create reports across projects. Budgets, time, team capacity, cost breakdowns, etc.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Integrations.svg",
    heading: "Integrations",
    desc: "Integrate with 50+ apps including Asana, Basecamp, Trello, Slack, and more.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Budgets.svg",
    heading: "Budgets",
    desc: "Monitor project budgets. Get early alerts when projects take longer than budgeted.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459456/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Cost-Tracking.svg",
    heading: "Cost Tracking",
    desc: "See how much every project costs to complete. Drill down into details.",
  },
  {
    img_url:
      "https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Expenses.svg",
    heading: "Expenses",
    desc: "Add project expenses in just a few clicks. Easily attach photos of receipts.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className={styles.featuresGrid}>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="50px"
      >
        {data.map((ele) => (
          <VStack spacing="20px">
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Image src={ele.img_url} />
            </Box>
            <Text fontSize="24px">{ele.heading}</Text>
            <Text fontSize="16px" color="#6d6e6d">
              {ele.desc}
            </Text>
          </VStack>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturesGrid;
