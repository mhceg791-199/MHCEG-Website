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
      title: "Structural & Architectural Engineering",
      paragraph:
        "We design innovative, resilient buildings with advanced structural analysis for high-rise, industrial, and seismic-resistant projects.",
      image: "/industries/1.webp",
      type: "1",
      sectionName: structural,
    },
    {
      title: "Urban Planning & Infrastructure",
      paragraph:
        "Our smart city and transport solutions enhance urban growth with efficient roads, bridges, and flood resilience systems",
      image: "/industries/2.webp",
      type: "2",
      sectionName: urban,
    },
    {
      title: "Energy & Industrial Solutions",
      paragraph:
        "We optimize renewable energy, power grids, and industrial facilities for sustainability and high-performance efficiency",
      image: "/industries/3.webp",
      type: "1",
      sectionName: energy,
    },
    {
      title: " Oil & Gas Engineering",
      paragraph:
        "We deliver pipeline, facility, and automation solutions, ensuring safety, compliance, and operational excellence.",
      image: "/industries/4.webp",
      type: "2",
      sectionName: oil,
    },
    {
      title: "Environmental & Sustainability Consulting",
      paragraph:
        "We implement carbon reduction, green certifications, and smart energy systems for eco-efficient, future-ready developments.",
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
