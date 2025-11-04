import FirstSectionByVideo from "../shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../shared/DescriptionAbout/DescriptionAbout";
// import MissionSection from "../Pages/AboutPage/MissionSection/MissionSection";
// import FirstSectionByImage from "../shared/FirstSectionByImage/FirstSectionByImage";
// import missionImage from "../../assets/about/mission/about.webp";
// import Values from "../Pages/AboutPage/Values/Values";
// import CarouselSection from "../Pages/AboutPage/Carousel/CarouselSection";

function About() {
  const paragraphs = [
    "Mosaic Holding Corporation (MHC) was founded on one simple belief — that true strength lies in connection.",
    "Just as a mosaic unites distinct pieces into one harmonious whole, MHC connects diverse architecture and engineering firms across continents — each retaining its identity, yet contributing to a shared vision of innovation and excellence.",
  ];
  const paragraphs2 = [
    "MHCEG was born from that same philosophy — to serve as MHC’s arm in the Middle East, translating global expertise into regional impact.",
    "From Cairo, we extend MHC’s reach through agility, creativity, and a deep understanding of local markets — delivering projects that embody both global vision and regional intelligence.",
  ];
  const paragraphs3 = [
    "Through MHC’s growing network of subsidiaries, we share knowledge, technology, and cultural insight to deliver future-ready infrastructure, architecture, and energy systems across regions — all built on a shared commitment to innovation, safety, and sustainable impact.",
  ];
  const paragraphs4 = [
    "MHCEG stands as the link between continents — where creativity meets precision, and where every connection builds the future.",
  ];

  

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-mhceg"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        paragraphs2={paragraphs2}
        paragraphs3={paragraphs3}
        paragraphs4={paragraphs4}
        particleColors={["#1a3442", "#1a3442"]}
        height="h-[120vh] md:h-[65vh]"
      /> {/*
      <MissionSection />

      <div className="mt-16">
        <FirstSectionByImage
          imgSrc={missionImage}
          title="MISSION"
          overlayColor="bg-black/70"
          height="h-[60vh]"
          description={`To engineer transformative solutions that merge global expertise with local adaptability, delivering designs and systems that are technically advanced, creatively inspired, and tailored to each market’s realities.\n
            We build with agility, precision, and purpose — redefining how engineering connects with people, cities, and industries.`}
        />
      </div>

      <FirstSectionByImage
        imgSrc=""
        title="VISION"
        overlayColor="bg-black/60"
        height="h-[60vh]"
        description={`To set a new benchmark for engineering consultancies in the Middle East — one that unites innovation, creativity, and cultural intelligence under a single model of excellence.\n
          We envision a future where connection drives progress, and every project becomes a catalyst for sustainable growth and human advancement.`}
      />
      <Values />
      <CarouselSection /> */}
    </>
  );
}

export default About;
