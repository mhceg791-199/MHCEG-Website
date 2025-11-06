import { useRef } from "react";
import IndustryItem from "./components/industryItem";
import useScrollToSection from "../../hooks/useScrollToSection";
import FirstSectionByVideo from "../shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../shared/DescriptionAbout/DescriptionAbout";
import industries from "../../data/industries";

function Industries() {
  const structural = useRef(null);
  const urban = useRef(null);
  const energy = useRef(null);
  const oil = useRef(null);
  const environmental = useRef(null);

  const refs = { structural, urban, energy, oil, environmental };
  useScrollToSection(refs);

  const paragraphs = [
    "At MHCEG, we work across industries that shape economies and improve lives — providing integrated architecture, engineering, and management solutions from concept to completion.",
  ];

  return (
    <>
      <FirstSectionByVideo title="Our Industries" />
      <DescriptionAbout
        id="Industries-mhceg"
        firstWord="Industries "
        secondWord=""
        paragraphs={paragraphs}
        particleColors={["#1a3442", "#1a3442"]}
        height="h-[25vh] md:h-[40vh]"
      />
      <div className="bg-[#0e1b22]">
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={industry.sectionName}
            className="border-b border-white/10"
          >
            <IndustryItem industry={industry} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Industries;
