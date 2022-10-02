import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Featurs from "./Features/Featurs";
import Integrations from "./Integrations/Integrations";
import Learning from "./Learning/Learning";
import Tracking from "./Tracking/Tracking";
import Customer from "./Customer/Customer";

const Home = () => {
  document.title="Home"
  return (
    <>
      <Dashboard />
      <Featurs />
      <Integrations />
      <Customer />

      <Learning />
      <Tracking />
    </>
  );
};

export default Home;
