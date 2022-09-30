import Dashboard from "./Components/Arsalan/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";
import Arsalan from "./Components/Arsalan/Arsalan";
import SignUp from "./Sharun/SignUp/SignUp";
import SimpleCard from "./Sharun/SignIn/SignIn";
import AllRoutes from "./Sharun/Routers/AllRoutes";
import { useEffect } from "react";
import { auth } from "./Sharun/BackEnd/Firebase";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [userImage,setUserimage]=useState("")
  const [name,setName]=useState("")
  const [flag,setFlag]=useState(false)

  useEffect(()=>{
    setFlag(false)
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserimage(user.photoURL)
        setFlag(true)
        
        setName(user.displayName)
      }else {
        setUserimage("")
        setFlag(false)
        setName("")
      }

    })
  },[])
  
 
  return (
    <>
    <Navbar imageUrl={userImage} flag={flag} name={name} />
   <AllRoutes/>
     <Footer/>
    </>
  );
}

export default App;
