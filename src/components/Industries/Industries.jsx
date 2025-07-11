import React, { useRef } from "react";
import FirstSection from "../shared/FirstSection/FirstSection";
import IndustryItem from "./components/industryItem";
import useScrollToSection from "../../hooks/useScrollToSection";

function Industries() {
  const structural = useRef(null); // Add reference for Management section
  const urban = useRef(null); // Add reference for Management section
  const energy = useRef(null); // Add reference for Management section
  const oil = useRef(null); // Add reference for Management section
  const environmental = useRef(null); // Add reference for Management section

  const refs = {
    structural,
    urban,
    energy,
    oil,
    environmental,
  };
  useScrollToSection(refs);
  const industries = [
    {
      title: "Architecture & Structural Engineering ",
      paragraph:
        "We design innovative, resilient structures from high-rises to seismic-resistant projects blending aesthetic vision with advanced engineering precision. ",
      image: "/industries/1.webp",
      type: "1",
      sectionName: structural,
    },
    {
      title: "Urban Design & Infrastructure",
      paragraph:
        "Our smart city solutions optimize urban growth through efficient transportation networks, resilient bridges, and flood-resistant infrastructure. ",
      image: "/industries/2.webp",
      type: "2",
      sectionName: urban,
    },
    {
      title: "Energy & Power Generation",
      paragraph:
        "We deliver renewable energy systems and grid optimizations that balance sustainability with high-performance efficiency. ",
      image: "/industries/3.webp",
      type: "1",
      sectionName: energy,
    },
    {
      title: " Oil & Gas Engineering",
      paragraph:
        "Specialized pipeline, facility, and automation solutions ensure operational excellence, safety, and regulatory compliance. ",
      image: "/industries/4.webp",
      type: "2",
      sectionName: oil,
    },
    {
      title: "Sustainability & Green Solutions ",
      paragraph:
        "Carbon reduction strategies, green certifications, and smart energy systems drive eco-efficient, future-ready developments. ",
      image: "/industries/5.webp",
      type: "1",
      sectionName: environmental,
    },
  ];
  return (
    <>
      <FirstSection
        title={"OUR INDUSTRIES"}
        image={"/industries/industries.webp"}
      />
      {industries.map((industry, index) => (
        <React.Fragment key={index}>
          <div ref={industry.sectionName}>
            <IndustryItem industry={industry} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Industries;
