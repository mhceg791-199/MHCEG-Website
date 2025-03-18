import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import FirstSection from "../shared/FirstSection/FirstSection";
import WhoWeAre from "./components/WhoWeAre";
import MissionAndVission from "./components/MissionAndVission";
import Values from "./components/Values";
import MHCEG_Numbers from "../shared/MHCEG-Numbers/MHCEG-Numbers";
import Services from "./components/Services";
import useScrollToSection from "../../hooks/useScrollToSection";

function About() {

  // ✅ Define refs once and use them in both refs object and JSX
  const firstSection = useRef(null); // Add reference for Management section
  const values = useRef(null); // Add reference for Management section
  const whoWeAre = useRef(null); // Add reference for Management section
  const MHCEGWithNumbers = useRef(null); // Add reference for Management section
  const services = useRef(null); // Add reference for Management section
  const missionAndVision = useRef(null); // Add reference for Management section

  const refs = {
    firstSection,
    whoWeAre,
    missionAndVision,
    values,
    MHCEGWithNumbers,
    services,
  };
  useScrollToSection(refs);

  return (
    <>
      <div ref={firstSection}>
        <FirstSection title="About US" image="/about/about.webp" />
      </div>
      <div ref={whoWeAre}>
        <WhoWeAre />
      </div>
      <div ref={missionAndVision}>  {/* ✅ Fix case to match refs key */}
        <MissionAndVission />
      </div>
      <div ref={values}>
        <Values />
      </div>
      <div ref={MHCEGWithNumbers}>  {/* ✅ Fix case to match refs key */}
        <MHCEG_Numbers />
      </div>
      <div ref={services}>
        <Services />
      </div>
    </>
  );
}

export default About;
