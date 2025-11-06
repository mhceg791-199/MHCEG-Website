import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Paragraph from "../../../shared/Paragraph/Paragraph";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";
import serviceOfferings from "../../../../data/serviceOfferings";
import { FaChevronRight } from "react-icons/fa";

export default function ServiceOfferings() {
  const [active, setActive] = useState(0);
  const imageRefs = useRef([]);

  // ✅ Preload all images once
  useEffect(() => {
    serviceOfferings.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <section className="bg-lightGray">
      <div className="font-semibold  md:my-8 text-center md:text-start">
        <SectionHeader firstWord="Service Offerings" />
      </div>

      <div className="flex w-full h-[50vh] md:h-[100vh]  overflow-hidden">
        {serviceOfferings.map((card, index) => (
          <motion.div
            key={card.id || index}
            onClick={() => setActive(index)}
            className={`relative overflow-hidden cursor-pointer transition-[flex] duration-500 ease-in-out 
              ${active === index ? "flex-[6]" : "flex-[1]"}
            `}
            whileHover={{ opacity: 0.98 }}
          >
            {/*  lazy-loading */}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={card.image}
              alt={card.title}
              loading="lazy"
              decoding="async"
              className={`
                w-full h-full object-cover will-change-transform transition-transform duration-700 ease-in-out
                ${active === index ? "grayscale-0 scale-105" : "grayscale"}
              `}
            />

            <div
              className={`
                absolute inset-0 bg-mainColor/85 flex flex-col justify-end
                text-white p-2 md:p-6 md:pb-10 transition-opacity duration-500 ease-in-out 
                ${active === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <h2 className="heading text-mainGold font-semibold mb-2">
                {card.title}
              </h2>
              <div className="md:text-2xl">
                <Paragraph p={card.text} />
              </div>
              <div className="hidden  md:block">
                {card &&
                card.description.map((desc, index) => (
                  <div key={index} className="flex gap-1 text-gray-300">
                    <span className="mt-4 text-mainGold">
                      <FaChevronRight size={14} />
                    </span>
                    <span className="mt-2 text-white font-bold">{desc.head}</span>
                    <Paragraph p={desc.desc} />
                  </div>
                ))}
              </div>

                <h5 className="md:text-xl font-semibold my-2">
                {card.end}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
