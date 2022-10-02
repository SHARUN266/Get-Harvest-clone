import React from "react";
import Tracking from "./Tracking/Tracking";
import Help from "./Help/Help";
import Empower from "./Empower/Empower";
import ProjectsTrack from "./ProjectsTrack/ProjectsTrack";
import TimeTracking from "./Timetracking/TimeTracking";
import Trusted from "./Trusted/Trusted";

const WhyHarvest = () => {
  return (
    <>
      <Help />
      <Empower />
      <TimeTracking />
      <ProjectsTrack />
      <Trusted />
      <Tracking />
    </>
  );
};

export default WhyHarvest;
