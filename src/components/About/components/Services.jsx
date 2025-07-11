import React from "react";

function Services() {
  return (
    <>
      <h2 className="text-center mt-10 mb-2">OUR SERVICIES</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-20 px-10 mb-10">
        <div className="flex flex-col justify-center">
          <h3 className="mt-9 mb-2">Comprehensive Service Offerings </h3>
          <ol className="list-disc list-inside text-gray-800 space-y-2">
            <li>Architecture Engineering – Visionary designs that balance functionality, aesthetics, and sustainability. </li>
            <li>Urban Design – Strategic planning to shape dynamic, livable, and resilient cities. </li>
            <li>Landscape Design – Harmonious outdoor spaces that enhance environmental and social value. </li>
            <li>Structural Design – Robust, innovative frameworks ensuring safety and longevity. </li>
            <li>Infrastructure – Future-ready systems supporting urban and industrial growth.</li>
            <li>Transportation – Smart, efficient mobility solutions for seamless connectivity. </li>
            <li>Power Generation – Sustainable energy systems driving progress and reliability. </li>
            <li>Oil & Gas – Precision-engineered solutions for complex industrial demands. </li>
          </ol>

          <h3 className="mt-9 mb-2">Project Leadership & Execution </h3>
          <ol className="list-disc list-inside text-gray-800 space-y-2">
            <li>Project Management – End-to-end oversight ensuring seamless delivery, from concept to completion. </li>
            <li>Construction Supervision – Rigorous quality control and compliance for flawless execution. </li>
          </ol>

          <h3 className="mt-9 mb-1">Safety & Efficiency at the Core </h3>
          <p>
            Every solution prioritizes safety, precision, and industry-leading standards, guaranteeing reliability while exceeding client expectations. Our commitment to innovation and excellence ensures transformative outcomes for every project. </p>
          <div className="md:my-4 my-2">
            {/* <button className="bg-mainColor text-base px-5 py-2 text-white rounded-lg ">
              Learn More
            </button> */}
          </div>
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="w-full rounded-2xl md:ps-20 md:py-5"
            src="/about/services/services.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Services;
