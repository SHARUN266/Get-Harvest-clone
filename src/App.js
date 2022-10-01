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
             <Navbar imageUrl={userImage} flag={flag} name={name} />
              <Home/>
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
