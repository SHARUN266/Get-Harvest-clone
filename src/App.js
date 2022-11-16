
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
import { Features } from "./Components/features/feature.jsx";
import { Customers } from "./Components/customers/Customers";
import Invoice from "./Faizan/InvoiceSection/invoice";
import Time from "./Faizan/TimeSection/Time";
import InvoiceForm from "./Faizan/InvoiceSection/InvoiceForm";
import InvoicePreview from "./Faizan/InvoiceSection/InvoicePreview";
import Projects from "./Pages/Projects";
import NewProject from "./Pages/NewProject";
import ProjectDetail from "./Pages/ProjectDetail";
import { Box } from "@chakra-ui/react";

/**
 * This is the main component of the app.
 * @returns None
 */

function App() {
  const [userImage, setUserimage] = useState("");
  const [name, setName] = useState("");
  const { ChangeFlagStateToFalse, ChangeFlagStateToTrue, flag } =
    useContext(ProjectData);

  /**
   * A React hook that is called when the component is mounted.        
   * @returns None        
   */
  useEffect(() => {
    ChangeFlagStateToFalse();
    auth.onAuthStateChanged((user) => {
      /**
              * If the user is logged in, set the user image and name to the user's details.        * Otherwise, set the user image and name to the default values.        
       */
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
              <Home />
            </>
          }
        />
        <Route
          path="/whyharvest"
          element={
            <>
              <Navbar imageUrl={userImage} flag={flag} name={name} />
              <WhyHarvest />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
            
              <Navbar imageUrl={userImage} flag={flag} name={name} />
              <Pricing />
            </>
          }
        />
        
        <Route
          path="/feature"
          element={
            <>
              <Navbar imageUrl={userImage} flag={flag} name={name} />
              <Features />
            </>
          }
        />
        <Route
          path="/customers"
          element={
            <>
              <Navbar imageUrl={userImage} flag={flag} name={name} />
              <Customers />
            </>
          }
        />

        <Route
          path="/invoice"
          element={
            <>
            <Box h={"auto"}>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <Invoice />
              </Box>
            </>
          }
        />
        <Route
          path="/invoice/new"
          element={
            <>
            <Box h={"auto"}>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <InvoiceForm />
              </Box>
            </>
          }
        />
        <Route
          path="/invoice/preview"
          element={
            <>
            
              <PrivateRoute>
            <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <InvoicePreview />
              </PrivateRoute>
          
             
            </>
          }
        />
        <Route
          path="/time"
          element={
            <>
            <Box h={"auto"} mb="30%">
            <PrivateRoute>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <Time />
              </PrivateRoute>
              </Box>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
            <PrivateRoute>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <Projects />
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/projects/new-projects"
          element={
            <>
            <PrivateRoute>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <NewProject />
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <>
            <PrivateRoute>
              <Navbar2 imageUrl={userImage} flag={flag} name={name} />
              <ProjectDetail />
              </PrivateRoute>
            </>
          }
        />
        /**
         * A route element that renders a sign up or sign in form.       
         * @returns None       
         */
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SimpleCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
