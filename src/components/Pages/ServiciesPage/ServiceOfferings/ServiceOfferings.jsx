// import { useState } from "react";
// import { motion } from "framer-motion";
// import Paragraph from "../../../shared/Paragraph/Paragraph";
// import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";
// import serviceOfferings from "../../../../data/serviceOfferings";

// export default function ServiceOfferings() {
//   const [active, setActive] = useState(0);

//   return (
//     <section>
//       <div className="font-semibold my-3 md:my-8 text-center md:text-start">
//         <SectionHeader firstWord="Comprehensive Service Offerings" />
//       </div>

//       <div className="flex w-full h-[80vh] overflow-hidden bg-lightGray">
//         {serviceOfferings.map((card, index) => (
//           <motion.div
//             key={card.id}
//             onClick={() => setActive(index)}
//             className={`
//             relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
//             ${active === index ? "flex-[6]" : "flex-[1]"}
//           `}
//             whileHover={{ opacity: 0.95 }}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className={`
//               w-full h-full object-cover transition-all duration-700 ease-in-out
//               ${active === index ? "grayscale-0 scale-105" : "grayscale"}
//             `}
//             />

//             {/* Overlay Text */}
//             <div
//               className={`
//               absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 flex flex-col justify-end
//               text-white p-6 pb-10 transition-all duration-500 ease-in-out
//               ${active === index ? "opacity-100" : "opacity-0"}
//             `}
//             >

//               <h2 className="heading text-mainGold font-semibold mb-2">{card.title}</h2>
//               <Paragraph p={card.text} />
//               {/* <p className="para text-gray-200">{card.text}</p> */}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";
// import Paragraph from "../../../shared/Paragraph/Paragraph";
// import serviceOfferings from "../../../../data/serviceOfferings";

// export default function ServiceOfferings() {
//   const [active, setActive] = useState(null);

//   return (
//     <section className="relative bg-[#f6f6f6] py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeader firstWord="Comprehensive Service Offerings" />

//         {/* Image grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
//           {serviceOfferings.map((item, index) => (
//             <motion.div
//               key={index}
//               layout
//               onClick={() => setActive(index)}
//               className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-md"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1a3442cc] via-[#1a344280] to-transparent flex items-end justify-center text-center p-5">
//                 <h3 className="text-white font-semibold text-lg tracking-wide">
//                   {item.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Overlay (details modal) */}
//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key="overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
//             onClick={() => setActive(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={serviceOfferings[active].image}
//                 alt={serviceOfferings[active].title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-8 text-gray-800">
//                 <h2 className="text-2xl font-bold text-mainColor mb-4">
//                   {serviceOfferings[active].title}
//                 </h2>
//                 <Paragraph p={serviceOfferings[active].text} />
//                 <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
//                   {serviceOfferings[active].description.map((desc, i) => (
//                     <li key={i}>{desc}</li>
//                   ))}
//                 </ul>
//                 <p className="mt-6 text-mainColor font-semibold">
//                   {serviceOfferings[active].end}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

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

      <div className="flex w-full h-[100vh] md:h-[80vh] overflow-hidden">
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
