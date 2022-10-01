import Dashboard from "./Components/Arsalan/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";
import Arsalan from "./Components/Arsalan/Home";

import { Customers } from "./Components/customers/Customers";
import { Features } from "./Components/features/Features";

import { useContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "./Sharun/BackEnd/Firebase";

import Navbar2 from "./Sharun/Navbar/Navbar2";
import { Route, Routes } from "react-router-dom/dist";
import SignUp from "./Sharun/SignUp/SignUp";
import SimpleCard from "./Sharun/SignIn/SignIn";
import { ProjectData } from "./Context/ProjectDataContext";
import PrivateRoute from "./Sharun/Components/PrivateRoute";



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
              <PrivateRoute>
             <Navbar2 imageUrl={userImage} flag={flag} name={name} />
                <Arsalan />
              </PrivateRoute>
            </>
          }
        />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SimpleCard />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
