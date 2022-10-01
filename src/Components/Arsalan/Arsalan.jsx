import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Featurs from "./Features/Featurs";
import Integrations from "./Integrations/Integrations";
import Learning from "./Learning/Learning";
import Tracking from "./Tracking/Tracking";

const Arsalan = () => {
  document.title="Harvest Home"
  return (
    <>
      <Dashboard />
      <Featurs />
      <Integrations />
      <Learning />
      <Tracking />
    </>
  );
};

export default Arsalan;
