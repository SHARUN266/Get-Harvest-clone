import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Components/Arsalan/Home";
import SimpleCard from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
//Client ID
//542877942694-s7ilbdsqcgm51dbf2tlh42fustku77v1.apps.googleusercontent.com
//Secret
//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
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SimpleCard />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
