import { AddIcon, ArrowBackIcon, ArrowForwardIcon, Icon } from '@chakra-ui/icons';
import { Box, Button, CircularProgress, Flex, Heading, Image, Input, Select, Text, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {Table     ,Tbody,Tr,Td,TableContainer,} from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
function Time() {
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    let date=new Date()
    let day=date.getDay()
    let mday=(date.getDate()>10)?date.getDate():`0${date.getDate()}`
    let month=date.getMonth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:eisOpen, onOpen:eonOpen, onClose:eonClose } = useDisclosure()
 
    const [tabIndex, setTabIndex] = useState(day)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({})
    const [modalData, setModalData] = useState("")
    const [toggle, setToggle] = useState(null)
    
    const [sunData, setSunData] = useState([])
    const [monData,setMonData] = useState([])
    const [tueData,setTueData] = useState([])
    const [wedData,setWedData] = useState([])
    const [thurData,setThurData] = useState([])
    const [friData,setFriData] = useState([])
    const [satData, setSatData] = useState([])
    const [project, setProject] = useState([])
    const Ref=useRef(null)
    const handleTabsChange = (index) => {
        setTabIndex(index)
      }
     const  handleChange = ({ target: { value, name }}) => {
        setState({...state,[name]: value })
     }
     const handleSubmit=()=>{
        setLoading(true)
        let data=state
        data={...state,day:day}
        axios.post("https://timetracker201rct.herokuapp.com/time",data)
         .then(()=>{
            getTimeList()
            onClose()
         }).catch((err)=>{
           alert("Please fill the details correctly")
           setLoading(false)
         })

     }

    const handleDelete=()=>{
        setLoading(true)
        const id=modalData
        axios.delete(`https://timetracker201rct.herokuapp.com/time/${id}`).then(()=>{
           getTimeList()
           eonClose()
        })
        
         setLoading(false)
    }

     const getProject=()=>{
        setLoading(true)
        axios.get("https://getharvest-fake-api.herokuapp.com/projects").then((res)=>{
            setProject(res.data)
            setLoading(false)
        })
     }
     const getTimeList=()=>{
        setLoading(true)
        axios.get("https://timetracker201rct.herokuapp.com/time").then((res)=>{
            console.log(res.data)
            const sundayData=res.data.filter((el)=>{
                return el.day===0
            })
            setSunData(sundayData)
            const monData=res.data.filter((el)=>{
                return el.day===1
            })
            setMonData(monData)
            const tueData=res.data.filter((el)=>{
                return el.day===2
            })
            setTueData(tueData)
            const wedData=res.data.filter((el)=>{
                return el.day===3
            })
            setWedData(wedData)
            const thurData=res.data.filter((el)=>{
                return el.day===4
            })
            setThurData(thurData)
            const friData=res.data.filter((el)=>{
                return el.day===5
            })
            setFriData(friData)
            const satData=res.data.filter((el)=>{
                return el.day===6
            })
            setSatData(satData)
            setLoading(false)
        })
     }
     const handleUpate=()=>{
        setLoading(true)
        const id=modalData
        axios.patch(`https://timetracker201rct.herokuapp.com/time/${id}`,state).then(()=>{
           getTimeList()
           onClose()
        })
        
         setLoading(false)
     }
     
      const handleDec=()=>{
        if(tabIndex>0){
            setTabIndex(tabIndex=>tabIndex-1)
        }else{
            setTabIndex(6)
        }
      }
      const handleInc=()=>{
        if(tabIndex<6){
            setTabIndex(tabIndex=>tabIndex+1)
        }else{
            setTabIndex(0)
        }
    }

    const timeCheck=(time)=>{
        time=time+""
        time=time.split(".")
        if(time.length>1){
            if(time[1].length===2){
            return time.join(".")}
            else{
                time[1]=`${time[1]}0`
                return time.join(".")}
            }
       else{
        return `${time}.00`
       }
    }
 

    useEffect(()=>{
        getProject()
        getTimeList()
        
    },[])
    
   const handleStart=(e,id,time,d)=>{
          if(Ref.current===null || toggle===id){
            let count=time
            
                 if(toggle===null){
                    e.target.style.variant="solid"
                    e.target.style.backgroundColor="black"
                    e.target.style.color="White"
                    
                    e.target.innerHTML=`<Image w="100%" mr="10px" src="https://thumbs.gfycat.com/BossyImmenseDuck-size_restricted.gif"/>Stop`
                    Ref.current=setInterval(()=>{
                        count=count+0.01
                        let num=count+""
                        num=num.split(".")
                        if(Number(num[1][0])===6){
                            count=count+0.40
                        }
                         count=Number(count).toFixed(2)
                         count=Number(count)
                        axios.patch(`https://timetracker201rct.herokuapp.com/time/${id}`,{time:count}).then(()=>{
                            axios.get("https://timetracker201rct.herokuapp.com/time").then((res)=>{
                                if(d===6){
                                    const satData=res.data.filter((el)=>{
                                        return el.day===6
                                    })
                                    setSatData(satData)
                                }
                                else if(d===0){
                                    const sunData=res.data.filter((el)=>{
                                        return el.day===0
                                    })
                                    setSunData(sunData)
                                }
                                else if(d===1){
                                    const monData=res.data.filter((el)=>{
                                        return el.day===1
                                    })
                                    setMonData(monData)
                                }
                                else if(d===2){
                                    const tueData=res.data.filter((el)=>{
                                        return el.day===2
                                    })
                                    setTueData(tueData)
                                }
                                else if(d===3){
                                    const wedData=res.data.filter((el)=>{
                                        return el.day===3
                                    })
                                    setWedData(wedData)
                                }
                                else if(d===4){
                                    const thurData=res.data.filter((el)=>{
                                        return el.day===4
                                    })
                                    setThurData(thurData)
                                }
                                else if(d===5){
                                    const friData=res.data.filter((el)=>{
                                        return el.day===5
                                    })
                                    setFriData(friData)
                                }
                            })    
                       
                          
                         })
                         
                    },60000)
                    setToggle(id)
                 }
                else{
                    e.target.style.variant="outline"
                    e.target.style.backgroundColor="White"
                    e.target.style.color="Black"
                    e.target.innerHTML=`Start`
                    clearInterval(Ref.current)
                    Ref.current=null;
                    setToggle(null)
                }
            
          }

          
           

                 
   }
   if(loading===true){
    return <Box w="90%" display="flex" justifyContent="center" m="auto"  pt="100px">
         <CircularProgress isIndeterminate size='200px' color='#FA5D00' />
    </Box>
 }
    return (
        <Box w={["95%","80%","80%"]} m="auto" mt="5%" overflowX="auto">
            <Flex ml="3em" mb="20px" wrap="wrap-reverse" alignItems="center">
                <Button variant="outline" borderLeftRadius={"1em"} onClick={handleDec}><Icon as={ArrowBackIcon}/></Button>
                <Button mr="15px" variant="outline"borderRightRadius={"1em"} onClick={handleInc}><Icon as={ArrowForwardIcon}/></Button>
                <Flex alignItems="center" wrap="wrap">
                <Heading fontWeight="500" mr="10px">Today: </Heading>
                <Heading fontWeight="400">{days[day]}, {mday} {months[month]}  </Heading>
                </Flex>
            </Flex>
            
            {/* Modal for add begins here */}
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent textAlign="center">
                <ModalHeader>New time entry for {days[day]}, {mday} {months[month]}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Text fontWeight="500" mb="10px" textAlign="left">Project / Task</Text>
                <Select name="project" onChange={handleChange} placeholder='Select Project' mb="10px">
                {project.map((el)=>{
                  return  <option key={el._id} value={el.projectName}>{el.projectName}</option>
                    
                })}
                </Select>
                <Select name="type" onChange={handleChange} placeholder='Select Type' mb="10px">
                <option value='design'>Design</option>
                <option value='marketing'>Marketing</option>
                <option value='programming'>Programming</option>
                <option value='projectManagement'>Project Management</option>
                </Select>
                <Flex justify="space-between">
                    <Input type="string" w="70%" name="notes" onChange={handleChange} placeholder='Notes (optional)'/>
                    <Input type="number" name="time" onChange={handleChange}  w="25%" placeholder='0:00'/>
                </Flex>
                </ModalBody>

                <ModalFooter>
                <Button mr={3} colorScheme='green' backgroundColor="#11742A" onClick={handleSubmit}>Start Timer</Button>
                <Button   onClick={onClose} variant="outline">
                    Cancel
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
           {/* Modal for edit begins here */}
           <Modal isOpen={eisOpen} onClose={eonClose}>
                                    <ModalOverlay />
                                    <ModalContent textAlign="center">
                                        <ModalHeader>New time entry for {days[day]}, {mday} {months[month]}</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                        <Text fontWeight="500" mb="10px" textAlign="left">Project / Task</Text>
                                        <Select name="project"  onChange={handleChange} placeholder='Select Project' mb="10px">
                                        {project.map((ele)=>{
                                            return  <option key={ele._id} value={ele.projectName}>{ele.projectName}</option>
                                                
                                            })}
                                        </Select>
                                        <Select name="type" onChange={handleChange} placeholder='Select Type' mb="10px">
                                        <option value='design'>Design</option>
                                        <option value='marketing'>Marketing</option>
                                        <option value='programming'>Programming</option>
                                        <option value='projectManagement'>Project Management</option>
                                        </Select>
                                        <Flex justify="space-between">
                                            <Input type="string" w="70%" placeholder='Notes (optional)'/>
                                            <Input name="time" onChange={handleChange} type="number"  w="25%" placeholder='0:00'/>
                                        </Flex>
                                        </ModalBody>

                                        <ModalFooter>
                                        <Button mr={3} colorScheme='green' backgroundColor="#11742A" onClick={()=>handleUpate()}>Update Timer</Button>
                                        <Button   onClick={eonClose} mr="5px" variant="outline">
                                            Cancel
                                        </Button>
                                        <Button   onClick={handleDelete} variant="solid" colorScheme="red">
                                            Delete
                                        </Button>
                                        </ModalFooter>
                                    </ModalContent>
            </Modal>


            <Flex>
            <Button mr="10px" colorScheme="green" backgroundColor="#11742A" p="10px" onClick={onOpen}><Icon boxSize="30" as={AddIcon}/></Button>
            <Box w="100%" >
            <Tabs isFitted  index={tabIndex} onChange={handleTabsChange} colorScheme='orange'>
                <TabList>
                    <Tab>Sun</Tab>
                    <Tab>Mon</Tab>
                    <Tab>Tue</Tab>
                    <Tab>Wed</Tab>
                    <Tab>Thu</Tab>
                    <Tab>Fri</Tab>
                    <Tab>Sat</Tab>
                </TabList>

                <TabPanels>
                <TabPanel p="0">
                    {sunData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {sunData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,0)}>
                                    
                                    Start </Button></Td>
                                <Td>
                                
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {monData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {monData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,1)}>
                                    
                                    Start </Button></Td>
                                <Td>
                               
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {tueData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {tueData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,2)}>
                                    
                                    Start </Button></Td>
                                <Td>
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {wedData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {wedData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,3)}>
                                    
                                    Start </Button></Td>
                                <Td>
                                
                                
                                <Button variant="outline" size="sm" onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {thurData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {thurData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,4)}>
                                    
                                    Start </Button></Td>
                                <Td>
                               
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {friData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {friData.map((el,i)=>{
                                 const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,5)}>
                                    
                                    Start </Button></Td>
                                <Td>
                               
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                    <TabPanel p="0">
                    {satData.length>0?<TableContainer>
                        <Table variant='simple'  >
                            <Tbody >
                            {satData.map((el,i)=>{
                                const time=timeCheck(el.time)
                                return <Tr key={el._id} >
                                <Td w="70%"><Box>
                                    <Text fontWeight="500">{el.project}</Text>
                                    <Text>{el.type}</Text>
                                    </Box></Td>
                                <Td>{time}</Td>
                                <Td><Button px="40px" variant="outline" onClick={(e)=>handleStart(e,el._id,el.time,6)}>
                                    
                                    Start </Button></Td>
                                <Td>
                                
                                <Button variant="outline" size="sm"  onClick={()=>{setModalData(el._id);eonOpen()}}>Edit</Button></Td>
                            </Tr> 
                            }) }
                            </Tbody>
                            
                        </Table>
                    </TableContainer>:<Box w="100%" h="250px" p="50px 80px" textAlign="center" background="#EFEFEF">
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">“How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.”</Text>
                        <Text fontWeight="400" color="rgba(29, 30, 28, 0.7)">– Annie Dillard</Text>
                    </Box> }
                    </TabPanel>
                   
                </TabPanels>
                </Tabs>
            </Box>
            </Flex>
        
        </Box>
    );
}

export default Time;