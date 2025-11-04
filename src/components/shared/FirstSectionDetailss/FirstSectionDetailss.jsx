import SustainabilityCard from "./SustainabilityCard";

function FirstSectionDetailss({ data }) {
  const { poster, logo, title, text } = data;

  return (
    <div className="sustainability-details">
      {/* background image */}
      <img
        className="w-full lg:h-[70vh] object-cover"
        src={poster}
        alt={title}
      />

      {/* containt details */}
      <div className="slider-container md:mx-5 overflow-hidden md:translate-y-[-25%]">
        <div className="mx-auto py-8">
          <SustainabilityCard
            img={logo}
            firstWord={title.firstWord}
            secondWord={title.secondWord}
            type="vertical"
            p={text}
            icon=""
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionDetailss;
