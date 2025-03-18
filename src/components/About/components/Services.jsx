import React from "react";

function Services() {
  return (
    <>
      <h2 className="text-center mt-10 mb-2">OUR SERVICIES</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-20 px-10 mb-10">
        <div className="flex flex-col justify-center">
          <h3 className="mt-9 mb-1">Our Commitment to Innovation</h3>
          <p>
            At MHCEG Consultancy, we are dedicated to delivering cutting-edge
            engineering solutions that drive efficiency and sustainability. Our
            innovative approach ensures that every project benefits from the
            latest technological advancements, optimizing both performance and
            longevity.
          </p>
          <h3 className="mt-9 mb-1">Safety and Efficiency at the Core</h3>
          <p>
            We prioritize safety and efficiency in every aspect of our work. Our
            expert engineers meticulously design and implement solutions that
            not only meet but exceed industry standards, ensuring the highest
            levels of reliability and functionality.
          </p>
          <h3 className="mt-9 mb-1">Expert Project Management</h3>
          <p>
            Our expert project management team oversees every phase of a
            project, from planning to execution, guaranteeing seamless
            integration and successful outcomes. With a focus on precision and
            excellence, we ensure that our clients receive the best engineering
            solutions tailored to their unique needs.
          </p>
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
