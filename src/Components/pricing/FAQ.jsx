import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import styles from "./pricing.module.css";
  
  const data = [
    {
      heading: "How do I sign up for the free plan?",
      desc: "When your trial account meets the free plan’s requirements, you can sign up for the free version during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version link below the plan options.",
    },
    {
      heading: "What happens at the end of my trial?",
      desc: "You can upgrade to a paid plan any time during your 30-day trial period. If you haven’t upgraded at the end of 30 days, your trial account will be automatically deactivated. We don’t collect credit card info when you start a trial, so you don’t need to worry about being charged. Even though your trial account will be deactivated, we won’t delete your data. If you ever want to try Harvest again in the future, your data will be waiting for you. If you’re looking to switch to the free plan, you can do that any time during your trial as well. You’ll see that option during the upgrade process as long as your account meets the free plan’s requirements.",
    },
    {
      heading: "Does my team qualify for any discounts?",
      desc: "Yes! When you pay for the year up front, you get a 10% discount that’s automatically applied to your account. We also offer discounts upon request to teams of 50+ people, nonprofits, schools and universities, educators using Harvest in a classroom setting, and students.",
    },
    {
      heading: "How can I get a quote for my team?",
      desc: "Use our handy pricing calculator to see how much your team would pay for Harvest and what discounts could apply.",
    },
    {
      heading: "What are our payment options?",
      desc: "You can pay for Harvest via credit card either monthly or yearly. If you pay for the year in advance, you’ll get a 10% discount on your bill! If you have 10 or more seats and pay for the year in advance, you can also request an invoice when you upgrade and pay for your subscription via check or bank transfer.",
    },
    {
      heading: "What happens if my team size changes?",
      desc: "If you’re paying monthly, you can add or remove seats at any time. Your price will be adjusted on your next monthly bill. If you have contractors or interns, or you anticipate the number of seats you’ll need may fluctuate from month to month, the monthly option is a better fit for you. If you paid for the year in advance, you can add seats at any time and will be charged a prorated amount based on the number of days left in your billing cycle. While you can’t remove seats during your current billing cycle, you can indicate inside your account if you’d like your yearly plan to renew with fewer seats. Keep in mind that yearly accounts receive a 10% discount, so if your seat requirements don’t change from month to month, yearly is probably the best option for you.",
    },
    {
      heading: "Can we switch our billing frequency?",
      desc: "If you’re paying monthly, you can switch to yearly payment at any time (and you’ll receive a 10% discount for doing so!). If you paid for the year in advance, you can switch to monthly payment at the end of your current yearly billing cycle, but keep in mind that the 10% discount will be removed. To make the change, reach out to our support team during the month before your renewal.",
    },
  ];
  
  const FAQ = () => {
    return (
      <div className={styles.faq}>
        <Flex>
          <Heading fontSize="42px" fontWeight="300" width="50%">
            Frequently asked questions
          </Heading>
          <VStack width="50%" borderBottom="1px solid #fa5d00">
            <Accordion width="100%" allowMultiple>
              {data.map((el) => (
                <AccordionItem
                  _hover={{ backgroundColor: "#fff0df" }}
                  borderTop="1px solid #fa5d00"
                >
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: "none" }}
                      padding="15px 25px"
                      fontSize="40px"
                      color="#fa5d00"
                      _expanded={{ bg: "#fff0df" }}
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize="22px"
                        color="#1d1e1c"
                      >
                        {el.heading}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{el.desc}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Flex>
      </div>
    );
  };
  
  export default FAQ;
  