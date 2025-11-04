import ReadyToJoin from "./components/ReadyToJoin/ReadyToJoin";
import DomeGallery from "../Pages/CareerPage/DomeGallery/DomeGallery";
import DescriptionAbout from "../shared/DescriptionAbout/DescriptionAbout";
import Values from "../Pages/AboutPage/Values/Values";

function Career() {
  const paragraphs = [
    "Join MHCEG and be part of a team that values innovation, excellence, and a commitment to shaping the future of engineering",
  ];
  return (
    <>
      <div style={{ width: "99vw", height: "80vh" }}>
        <DomeGallery />
      </div>

      <DescriptionAbout
        id="Careers"
        firstWord="Join Our Team "
        secondWord="Visionary Engineers"
        paragraphs={paragraphs}
        particleColors={["#1a3442", "#1a3442"]}
        height="h-[40vh]"
      />
      <Values />
      <ReadyToJoin />
    </>
  );
}

export default Career;
