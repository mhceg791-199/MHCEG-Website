import React from "react";

function Values() {
  const values = [
    {
      image: "/about/values/1.webp",
      title: "Excellence & Innovation",
      paragraph:
        "Modern architecture, futuristic engineering, innovative building design, cutting-edge technology in construction",
    },
    {
      image: "/about/values/2.webp",
      title: "Structural Integrity",
      paragraph:
        "Strong building structures, artistic architecture, balance of strength and beauty, iconic modern buildings",
    },
    {
      image: "/about/values/3.webp",
      title: "Integrity & Professionalism ",
      paragraph:
        "Handshake in construction, ethical business practices, transparent teamwork, professional engineering team",
    },
    {
      image: "/about/values/4.webp",
      title: "Sustainable Design",
      paragraph:
        "We prioritize sustainability, integrating energy-efficient materials, passive design strategies, and green building practices to minimize environmental impact.",
    },
    {
      image: "/about/values/5.webp",
      title: "Collaborative Success",
      paragraph:
        "Through collaboration, we cultivate strong partnerships with clients, architects, and industry leaders, ensuring seamless execution, design cohesion, and long-term success.",
    },
    {
      image: "/about/values/6.webp",
      title: "Visionary Architecture",
      paragraph:
        "We push creative boundaries, crafting forward-thinking designs that shape inspiring, future-ready spaces.",
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
