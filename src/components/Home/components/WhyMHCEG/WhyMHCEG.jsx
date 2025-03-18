import React from "react";

function WhyMHCEG() {
  const points = [
    "Utilizes BIM, energy management, AIA standards, and 4D augmented reality.",
    "Provides cloud-based 24-hour services.",
    "Delivers solutions tailored to client goals.",
    "Enhances strategic objectives and business performance.",
    "Ensures exceptional.",
  ];
  return (
    <>
      <section className="text-center">
        <h2>Why MHCEG ?</h2>
        <p className="md:w-1/2 w-full m-auto">
          MHCEG Consultancy leverages advanced technology and an experienced
          team to deliver tailored engineering solutions. They focus on
          maximizing value, minimizing risks, and ensuring optimal results for
          design and construction projects.
        </p>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 flex flex-col md:ps-10 p-0 justify-center">
          <h3 className="md:mb-7 mb-3">Key Features</h3>
          {points.map((point, index) => (
            <div
              key={index}
              data-aos="zoom-in-down"
              className="flex items-center my-3"
            >
              <i className="fa-solid text-lg  fa-check pe-2"></i> <p>{point}</p>
            </div>
          ))}
        </div>
        <div className="col-span-1 m-auto">
          <img data-aos="fade-left" className="rounded-2xl" src="/home/whyMHCEG.webp" alt="" />
        </div>
      </section>
    </>
  );
}
export default WhyMHCEG;
