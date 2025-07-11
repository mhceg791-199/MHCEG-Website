import React from "react";

function Values() {
  const values = [
    {
      image: "/about/values/1.webp",
      title: "Excellence & Expertise",
      paragraph:
        "Mastery in modern architecture, precision engineering, and innovative construction techniques defines our work. We blend artistry with technical rigor to deliver iconic, future-ready structures.",
    },
    {
      image: "/about/values/2.webp",
      title: "Safety & Structural Integrity",
      paragraph:
        "Every design prioritizes resilience, marrying aesthetic brilliance with uncompromising safety standards to withstand the test of time.",
    },
    {
      image: "/about/values/3.webp",
      title: "Professionalism & Integrity",
      paragraph:
        "Ethical practices, accountability, and a dedication to sustainable development guide our interactions, ensuring projects are executed with unwavering integrity. ",
    },
    {
      image: "/about/values/4.webp",
      title: "Sustainable Design",
      paragraph:
        "We champion eco-conscious solutions by harnessing energy-efficient materials, passive design strategies, and green building practices to minimize environmental impact while maximizing functionality.",
    },
    {
      image: "/about/values/5.webp",
      title: "Client Focus & Collaborative Success",
      paragraph:
        "Through transparent communication and tailored solutions, we build trust and foster long-term partnerships, ensuring projects align with client aspirations and community needs. ",
    },
    {
      image: "/about/values/6.webp",
      title: "Innovation & Visionary Architecture",
      paragraph:
        "We challenge conventions, embracing advanced technologies and forward-thinking design to create spaces that inspire, adapt, and endure.",
    },
  ];

  return (
    <>
      <h2 className="text-center text-2xl font-bold mt-10 mb-2">OUR VALUES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20">
        {values.map(({ image, title, paragraph }, index) => (
          <div
            key={index}
            data-aos="flip-left"
            className="flex flex-col   bg-white p-4 "
          >
            <div className="w-full flex justify-center">
              <img
                className="w-full h-[250px] object-cover"
                src={image}
                alt={title}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-gray-700">{paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Values;
