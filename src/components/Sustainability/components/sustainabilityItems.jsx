import React from "react";
import generateSlug from "../../../context/Functions/generateSlug";
import { Link } from "react-router-dom";

function SustainabilityItems() {
  const Suctainability = [
    {
      title: "Green Building Technologies",
      paragraph:
        "We incorporate high-performance insulation, energy-efficient HVAC systems, and smart automation to create eco-friendly, low-energy buildings that comply with global sustainability standards.",
      image: "/sustainability/1.webp",
      link: `/sustainability/${generateSlug("Green Building Technologies")}`,
    },
    {
      title: "Carbon Reduction Programs",
      paragraph:
        "Our projects are designed with net-zero emissions strategies, integrating low-carbon materials, energy recovery systems, and carbon capture technologies to reduce environmental footprint.",
      image: "/sustainability/2.webp",
      link: `/sustainability/${generateSlug("Carbon Reduction Programs")}`,
    },
    {
      title: "Digital Twin & BIM Modeling",
      paragraph:
        " We utilize Building Information Modeling (BIM) and Digital Twin technology to optimize resource allocation, reduce material waste, and improve long-term building performance",
      image: "/sustainability/3.webp",
      link: `/sustainability/${generateSlug("Digital Twin & BIM Modeling")}`,
    },
    {
      title: "Renewable Energy Integration",
      paragraph:
        "We develop and implement solar, wind, and hydroelectric power solutions, ensuring that projects harness clean, renewable energy sources to support sustainable infrastructure",
      image: "/sustainability/4.webp",
      link: `/sustainability/${generateSlug("Renewable Energy Integration")}`,
    },
    {
      title: "Sustainable Water Management",
      paragraph:
        "Through stormwater management systems, rainwater harvesting, and wastewater recycling, we ensure efficient water use and conservation across urban and industrial projects",
      image: "/sustainability/5.webp",
      link: `/sustainability/${generateSlug("Sustainable Water Management")}`,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-10 gap-14 px-4 sm:px-10 lg:px-20">
        {Suctainability.map(({ image, title, paragraph, link }, index) => (
          <div
            key={index}
            className="flex flex-col  rounded-2xl  bg-mainColor text-white  "
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold my-4">{title}</h3>
              <p className="text-gray-700 mb-7">{paragraph}</p>
            </div>
            <div className="w-full flex justify-center">
              <img
                className="w-full h-[250px] object-cover"
                src={image}
                alt={title}
              />
            </div>

            <Link
              to={link}
              className="px-6 py-2  bg-white rounded-lg text-base  text-black self-center my-6"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SustainabilityItems;
