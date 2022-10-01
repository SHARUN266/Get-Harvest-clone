import Dashboard from "./Components/Arsalan/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";




import { useContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "./Sharun/BackEnd/Firebase";

import Navbar2 from "./Sharun/Navbar/Navbar2";
import { Route, Routes } from "react-router-dom/dist";
import SignUp from "./Sharun/SignUp/SignUp";
import SimpleCard from "./Sharun/SignIn/SignIn";
import { ProjectData } from "./Context/ProjectDataContext";
import PrivateRoute from "./Sharun/Components/PrivateRoute";
import Home from "./Components/Arsalan/Home";
import WhyHarvest from "./Components/Arsalan/WhyHarvest";
import Pricing from "./Components/pricing/Pricing";
import  {Features}  from "./Components/features/feature.jsx";
import { Customers } from "./Components/customers/Customers";
import Invoice from "./Faizan/InvoiceSection/invoice";
import Time from "./Faizan/TimeSection/Time";
import InvoiceForm from "./Faizan/InvoiceSection/InvoiceForm";
import InvoicePreview from "./Faizan/InvoiceSection/InvoicePreview";
import Projects from "./Pages/Projects";
import NewProject from "./Pages/NewProject";
import ProjectDetail from "./Pages/ProjectDetail";



function App() {
  const [userImage, setUserimage] = useState("");
  const [name, setName] = useState("");
  const { ChangeFlagStateToFalse, ChangeFlagStateToTrue, flag } =
    useContext(ProjectData);

  useEffect(() => {
    ChangeFlagStateToFalse();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserimage(user.photoURL);
        ChangeFlagStateToTrue();

        setName(user.displayName);
      } else {
        setUserimage("");
        ChangeFlagStateToFalse();
        setName("");
      }
    });
  }, []);

  return (
    <>

      <Routes>
        
        <Route
          path="/"
          element={
            <>
              
             <Navbar imageUrl={userImage} flag={flag} name={name} />
              <Home/>
            
            </>
          }
        />
        <Route path="/whyharvest" element={
        <>
        <Navbar imageUrl={userImage} flag={flag} name={name} />
        <WhyHarvest/>
        </>
        }/>
        <Route path="/pricing" element={
        <>
        <Navbar imageUrl={userImage} flag={flag} name={name} />
        <Pricing/>
        </>}/>
        <Route path="/feature" element={<>
        <Navbar imageUrl={userImage} flag={flag} name={name} />
        <Features/>
        </>}/>
        <Route path="/customers" element={<>
        <Navbar imageUrl={userImage} flag={flag} name={name} />
        <Customers/>
        </>}/>
        
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/invoice/new" element={<InvoiceForm/>}/>
        <Route path="/invoice/preview" element={<InvoicePreview/>}/>
        <Route path="/time" element={<Time/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/new-projects" element={<NewProject/>}/>
        <Route path="/projects/:id" element={<ProjectDetail/>}/>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SimpleCard />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
