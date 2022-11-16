import React from "react";
import Tracking from "./Tracking/Tracking";
import Help from "./Help/Help";
import Empower from "./Empower/Empower";
import ProjectsTrack from "./ProjectsTrack/ProjectsTrack";
import TimeTracking from "./Timetracking/TimeTracking";
import Trusted from "./Trusted/Trusted";

const WhyHarvest = () => {
  document.title = "Why Harvest?";
  return (
    <>
      <div style={{ width: "100%", background: "#fff8f1" }}>
        <Help />
        <Empower />
        <TimeTracking />
        <ProjectsTrack />
        <Trusted />
      </div>

      <Tracking />
    </>
  );
};

export default WhyHarvest;
