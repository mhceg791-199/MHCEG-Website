import React from "react";

function WhyMHCEG() {
  const points = [
    " Tailored Precision – Custom-engineered strategies that align with your unique project goals. ",
    "Future-Ready Innovation – Leveraging AI, IoT, and sustainable practices to future-proof designs. ",
    "Seamless Execution – From concept to completion, we optimize cost, time, and quality without compromise. ",
    "Strategic Impact – Solutions designed to enhance ROI, operational resilience, and long-term growth. ",
  ];
  return (
    <>
      <section className="text-center">
        <h2>Why MHCEG ?</h2>
        <p className="md:w-1/2 w-full m-auto">
          We don’t just meet industry standards, we redefine them. By integrating BIM, AI-driven analytics, 4D augmented reality, and cloud-based project management, we ensure real-time collaboration, risk mitigation, and unparalleled efficiency—24/7, anywhere in the world. At MHCEG, we turn projects into success stories.</p>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 flex flex-col md:ps-10 p-0 justify-center">
          <h3 className="md:mb-7 mb-3">Key Features</h3>
          {points.map((point, index) => (
            <div
              key={index}
              data-aos="zoom-in-down"
              className="flex items-center my-1"
            >
              <i className="fa-solid text-lg  fa-check pe-2"></i> <p>{point}</p>
            </div>
          ))}
        </div>
        <div className="col-span-1 m-auto">
          <img data-aos="fade-left" className="rounded-2xl" src="/home/whyMHCEG.webp" alt="Why MHCEG" />
        </div>
      </section>
    </>
  );
}
export default WhyMHCEG;
