import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./feature.module.css"
import {AiOutlineArrowDown} from "react-icons/ai"
import { Compo } from './Compo'
import data from './feature'
import { useRef } from 'react'
import { Start } from './Start'
// import { useNavigate } from 'react-router-dom'



export const Features = () => {
    document.title="Feature"
    const timer=useRef()
    const report=useRef()
    const invoice=useRef()
    const timermove=()=>{
        timer.current.scrollIntoView({
            behavior:"smooth"
        })
       
    }

    const reportmove=()=>{
        report.current.scrollIntoView({
            behavior:"smooth"
        })
       
    }
    const invoicemove=()=>{
        invoice.current.scrollIntoView({
            behavior:"smooth"
        })
       
    }

    // const navigate=useNavigate()
    // const signUp=()=>{
    //     navigate("/signup")
    // }

  return (
        <Box bgColor="#fff8f1" >
    <Box  width={"90%"} margin="auto"  >
     <Text fontWeight={"400"} fontSize="50px" >Everything your team needs to keep ticking</Text>
     <Text fontWeight={"400"} fontSize="29px" >Intuitive time tracking and powerful insights that help your team thrive.</Text>
     <Box className={styles.btn} display={"flex"}  mt="7%"  gap="5%" >
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around" _hover={{bgColor:"rgba(250,93,0,5%)"}} >
            <img src="	https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" alt="" />
            <Text fontSize={"x-large"} _hover={{color:"#fa5d00",cursor:"pointer"}} onClick={timermove} >Time tracking</Text>
            <AiOutlineArrowDown size={"25px"}  color="#fa5d00" />
        </Box>
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around" _hover={{bgColor:"rgba(250,93,0,5%)"}} >
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" alt="" />
            <Text fontSize={"x-large"} _hover={{color:"#fa5d00",cursor:"pointer"}} onClick={reportmove} >Report & analysis</Text>
            <AiOutlineArrowDown size={"25px"}  color="#fa5d00"  />
            
            
        </Box>
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around" _hover={{bgColor:"rgba(250,93,0,5%)"}} >
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg" alt="" />
            <Text fontSize={"x-large"} _hover={{color:"#fa5d00",cursor:"pointer"}} onClick={invoicemove} >Invoicing & payments</Text>
            <AiOutlineArrowDown size={"25px"}  color="#fa5d00"  />
            
        </Box>
    </Box>



     <Box borderY={"1px solid red"} mt="10%"  >
     <Box display={"flex"} alignItems="center" mt="10%" ref={timer} >
        <Box >
            <Text align={"left"} color="#fb701e" fontSize="4xl">Time tracking</Text>
            <Box fontWeight={"500"} fontSize="22px" mt={"20px"} paddingRight="30px" >An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</Box>
            <Button color={"white"} bg="#fa5d00" size="lg" borderRadius={"10px"} mt={"10%"} _hover={{bgColor:"rgba(250,93,0,90%)",borderColor:"rgba(250,93,0,90%)"}} >Start your free trial</Button>
        </Box>
        <Box border={"1px solid black"}  >
            <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=1181&name=screenshot-features-timesheets.png" alt="" />
        </Box>

     </Box>
     <Box  display={"flex"} width="95%" margin={"auto"} justifyContent="space-between"  fontFamily={"MuotoWeb,sans-serif"}  mt="5%" pb="9%">
        <Box width={"32%"}>
            <Box>
                <Box display={"flex"} alignItems="center" >
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg" alt="" />
                    <Text fontSize={"26px"} >Track time from browser, desktop, and mobile</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
                Make it as easy as possible for your team to capture their time with dedicated apps across devices.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg" alt="" />
                    <Text fontSize={"26px"}>Integrated with your workflow</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Harvest integrates with the tools your team knows and loves — capture time the way your team already works.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg" alt="" />
                    <Text fontSize={"26px"}>Custom reminders for consistent time tracking</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Create automated reminders to help your team track time regularly and accurately.
            </Box>
        </Box>
        
     </Box>
     
     </Box>
     
     <Box mt="100px" display={"flex"} alignItems="center" ml="10px"  >
        <Box >
            <img style={{maxWidth:"375px",borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"  alt="" />
        </Box>
        <Box>
            <Box fontSize={"30px"} fontWeight="400" ml="5%" pb="3%">
               
                Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.
               
                </Box>
            <Box  fontSize={"20px"} fontWeight="450" ml="5%">
            <strong>Genevieve Laing</strong>
            <br />
            Director of Engineering, Cooper Perkins
            </Box>
        </Box>
    </Box>
     

    <Box borderY={"1px solid red"} mt="10%"  >
     <Box display={"flex"} alignItems="center" mt="10%" ref={report} >
        <Box ml="15px">
            <Text align={"left"} color="#fb701e" fontSize="4xl">Reports & analysis</Text>
            <Box fontWeight={"500"} fontSize="22px" mt={"20px"} paddingRight="30px" >A wide selection of visual reports keep projects running smoothly and your team supported.</Box>
            <Button color={"white"} bg="#fa5d00" size="lg" borderRadius={"10px"} mt={"10%"} _hover={{bgColor:"rgba(250,93,0,90%)",borderColor:"rgba(250,93,0,90%)"}} >Start your free trial</Button>
        </Box>
        <Box border={"1px solid black"}  >
            <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=1181&name=screenshot-features-projects.png" alt="" />
        </Box>

     </Box>
     <Box display={"flex"} width="95%" margin={"auto"} justifyContent="space-between"  fontFamily={"MuotoWeb,sans-serif"}  mt="5%" pb="9%" flexWrap={"wrap"}>
        <Box width={"32%"}>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg" alt="" />
                    <Text fontSize={"26px"} >Keep budgets on target</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Harvest updates budgets as your team tracks time, so you can keep your projects on track and profitable.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg" alt="" />
                    <Text fontSize={"26px"}>Visualize team capacity</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            See who’s overworked and who’s under-utilized at a glance with capacity reporting.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg" alt="" />
                    <Text fontSize={"26px"}>Understand costs</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
             Keep track of internal costs and review past project data to inform future project scope and estimates.
            </Box>
        </Box>

        <Box width={"32%"} mt="3em" >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg" alt="" />
                    <Text fontSize={"26px"}>Analyze time spent</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
             See which projects and tasks are consuming your team’s time and impacting costs.
            </Box>
        </Box>

        <Box width={"32%"} mt="3em" >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg" alt="" />
                    <Text fontSize={"26px"}>Dive into the details</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Powerful filters give you the detailed data needed to understand where your time goes and plan what’s next
            </Box>
        </Box>

        <Box width={"32%"} mt="3em" >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="	https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg" alt="" />
                    <Text fontSize={"26px"}>Do more with your data</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            It’s easy to export data from Harvest into the reporting tools you already use to gain additional insights.
            </Box>
        </Box>

        
        
     </Box>
     
     </Box>
   
     <Box mt="100px" display={"flex"} alignItems="center" ml="10px"  >
        <Box >
            <img style={{maxWidth:"375px",borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=563&name=features-quote-2.jpg"  alt="" />
        </Box>
        <Box>
            <Box fontSize={"30px"} fontWeight="400" ml="5%" pb="3%">
               
            We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation
               
                </Box>
            <Box  fontSize={"20px"} fontWeight="450" ml="5%">
            <strong>Noah Gedrich</strong>
            <br />
            CTO, Zehner
            </Box>
        </Box>
    </Box>
     
   
    <Box  mt="10%" borderTop={"1px solid red"}   >
      
     <Box display={"flex"} alignItems="center" mt="10%" ref={invoice} >
        <Box >
            <Text align={"left"} color="#fb701e" fontSize="4xl">Invoicing & <br/> payments</Text>
            <Box fontWeight={"500"} fontSize="22px" mt={"20px"} paddingRight="30px" >Turn your team’s tracked time and expenses into invoices and collect payment quickly with integrated online payments.</Box>
            <Button color={"white"} bg="#fa5d00" size="lg" borderRadius={"10px"} mt={"10%"} _hover={{bgColor:"rgba(250,93,0,90%)",borderColor:"rgba(250,93,0,90%)"}}  >Start your free trial</Button>
        </Box>
        <Box border={"1px solid black"}  >
            <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-invoices-1.png?width=1181&name=screenshot-features-invoices-1.png" alt="" />
        </Box>

     </Box>
     <Box display={"flex"} width="95%" margin={"auto"} justifyContent="space-between"    mt="5%" pb="9%">
        <Box width={"32%"}>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg" alt="" />
                    <Text fontSize={"26px"} >Streamline your invoicing</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Easily create and send accurate invoices using your team’s time and expenses already tracked in Harvest.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg" alt="" />
                    <Text fontSize={"26px"}>Get paid fast with online payments</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            PayPal and Stripe integrations let your clients quickly and conveniently pay invoices online.
            </Box>
        </Box>
        <Box width={"32%"} >
            <Box >
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg" alt="" />
                    <Text fontSize={"26px"}>Keep your books up to date</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
            Automatically copy your Harvest invoices and payments to QuickBooks Online or Xero for simplified accounting.
            </Box>
        </Box>
        
     </Box>
     
     </Box>

    

    

    


     
    </Box>
   
    <Box borderTop={"1px solid red"}>
    <Start/>
    </Box>
    </Box>
  )
}
