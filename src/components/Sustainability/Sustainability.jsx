import React from "react";
import SustainabilityItems from "./components/sustainabilityItems";

function Sustainability() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/sustainability/sustainability.webp")`,
        }}
        className={` bg-no-repeat bg-fixed bg-cover bg-cener text-white md:h-[90vh] h-[60vh] relative `}
      >
        <div className="flex p-11 flex-col justify-center  absolute top-0 bottom-0 left-0 right-0 md:w-1/2 w-full bg-mainLayer z-10 ">
          <h1 className="mb-7">Sustainability & Innovation</h1>
          <p className="mb-5">
            At MHCEG Consultancy, we engineer solutions that address today’s challenges while safeguarding tomorrow’s resources. Our approach embeds sustainability at every stage from visionary design to precision execution and long-term operation. Through renewable energy integration, carbon-neutral strategies, and advanced digital modeling, we deliver projects that are environmentally responsible, energy-efficient, and built to endure. </p>
          <p className="mb-3">We partner with clients, policymakers, and industry pioneers to redefine sustainable urban development, infrastructure, and industrial systems. By harnessing smart technologies, climate-resilient materials, and data-driven innovation, we reduce ecological footprints while maximizing efficiency, performance, and value for generations to come. </p>
        </div>
      </div>
      <SustainabilityItems />
    </>
  );
}

export default Sustainability;
