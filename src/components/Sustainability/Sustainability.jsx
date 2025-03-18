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
            At MHCEG Consultancy, we believe that engineering must not only meet
            today’s needs but also preserve resources for future generations.
            Sustainability is woven into every phase of our project development,
            from initial concept and design to execution and long-term
            operation. By integrating renewable energy solutions, carbon
            reduction strategies, and cutting-edge digital modeling, we ensure
            that our projects are environmentally responsible, energy-efficient,
            and built for longevity
          </p>
          <p className="mb-3">
            We collaborate with clients, policymakers, and industry leaders to
            drive sustainable transformations in urban development,
            infrastructure, and industrial engineering. By leveraging advanced
            digital tools, smart energy systems, and climate-conscious
            materials, we minimize environmental impact while enhancing
            operational efficiency and cost-effectiveness
          </p>
        </div>
      </div>
      <SustainabilityItems/>
    </>
  );
}

export default Sustainability;
