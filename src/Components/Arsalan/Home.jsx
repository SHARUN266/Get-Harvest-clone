import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Featurs from "./Features/Featurs";
import Integrations from "./Integrations/Integrations";
import Learning from "./Learning/Learning";
import Tracking from "./Tracking/Tracking";
import Customer from "./Customer/Customer";

const Home = () => {
  document.title = "Home";
  return (
    <>
      <div style={{ width: "100%", background: "#fff8f1" }}>
        <Dashboard />
        <Featurs />
        <Integrations />
        <Customer />
        <Learning />
      </div>

      <Tracking />
    </>
  );
};

export default Home;
