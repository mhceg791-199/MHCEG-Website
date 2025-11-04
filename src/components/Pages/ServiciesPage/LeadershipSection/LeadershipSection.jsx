// import { motion } from "framer-motion";
// import { FaTasks, FaHardHat } from "react-icons/fa";

// export default function LeadershipSection() {
//   const cards = [
//     {
//       icon: <FaTasks className="text-3xl text-mainGold" />,
//       title: "Project Management",
//       text: "End-to-end oversight ensuring seamless delivery, from concept to completion.",
//     },
//     {
//       icon: <FaHardHat className="text-3xl text-mainGold" />,
//       title: "Construction Supervision",
//       text: "Rigorous quality control and compliance for flawless execution.",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center mb-14">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-mainGold"
//         >
//           Project Leadership & Execution
//         </motion.h2>
//         <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//           Our approach ensures precision, efficiency, and excellence at every project stage.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//         {cards.map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-md hover:bg-white/10 hover:scale-105 hover:border-mainGold transition-all duration-500 shadow-md"
//           >
//             <div className="mb-5">{card.icon}</div>
//             <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//             <p className="text-gray-300 leading-relaxed">{card.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaTasks, FaHardHat } from "react-icons/fa";
import CircularText from "../CircularText/CircularText";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

export default function LeadershipSection() {
  const colors = {
    mainColor: "#1a3442",
    mainLayer: "#1a3442e6",
    mainGold: "#C5A363",
  };

  const cards = [
    {
      icon: <FaTasks className="text-4xl" style={{ color: colors.mainGold }} />,
      title: "Operational Excellence",
      head: "Safety isn’t a step — it’s the standard.",
      text: "Every detail we design and every process we manage reflects an uncompromising commitment to protecting people, quality, and the environments we build within.",
    },
    {
      icon: <FaHardHat className="text-4xl" style={{ color: colors.mainGold }} />,
      title: "Technological Innovation",
      head: "Innovation isn’t an option — it’s our foundation.",
      text: "We integrate intelligent systems, digital engineering, and creative thinking to push boundaries, enhance precision, and shape the next generation of sustainable design.",
    },
  ];

  return (
    <section
      className="text-white md:py-20 px-6 flex justify-center"
      style={{
        background: `linear-gradient(to bottom, ${colors.mainColor}, ${colors.mainLayer})`,
      }}
    >
      <div className="w-full max-w-7xl text-center">
        

        <SectionHeader firstWord={"Built on Safety, Driven by Innovation"} />

      
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 text-center">
          <div className="group relative p-6 md:p-10 w-full max-w-[480px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20">
            <div className="text-mainGold text-5xl mb-5 flex justify-center group-hover:rotate-12 transition-transform duration-500">
              {cards[0].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-mainGold">
              {cards[0].title}
            </h3>
            <h5 className="text-xl font-semibold mb-1">
              {cards[0].head}
            </h5>
            <p className="text-gray-300 leading-relaxed">{cards[0].text}</p>
            <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </div>

          {/* Circular Text*/}
          <div className="flex justify-center items-center w-[160px] h-[160px]">
            <CircularText
              text="MHCEG*CONSULTANCY*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>

          <div className="group relative p-6 md:p-10 w-full max-w-[480px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20">
            <div className="text-mainGold text-5xl mb-5 flex justify-center group-hover:rotate-12 transition-transform duration-500">
              {cards[1].icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-mainGold">
              {cards[1].title}
            </h3>
            <h5 className="text-lg font-semibold mb-1">
              {cards[1].head}
            </h5>
            <p className="text-gray-300 leading-relaxed">{cards[1].text}</p>
            <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { FaTasks, FaHardHat } from "react-icons/fa";

// export default function LeadershipSection() {
//   const colors = {
//     mainColor: "#1a3442",
//     mainLayer: "#1a3442e6",
//     mainGold: "#C5A363",
//   };

//   const cards = [
//     {
//       icon: <FaTasks className="text-4xl" style={{ color: colors.mainGold }} />,
//       title: "Project Management",
//       text: "End-to-end oversight ensuring seamless delivery, from concept to completion.",
//     },
//     {
//       icon: <FaHardHat className="text-4xl" style={{ color: colors.mainGold }} />,
//       title: "Construction Supervision",
//       text: "Rigorous quality control and compliance for flawless execution.",
//     },
//   ];

//   return (
//     <section
//       className="text-white py-20 px-6 flex justify-center"
//       style={{
//         background: `linear-gradient(to bottom, ${colors.mainColor}, ${colors.mainLayer})`,
//       }}
//     >
//       <div className="w-full max-w-7xl text-center">
//         {/* العنوان الرئيسي */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="heading font-bold mb-4 tracking-wide"
//           style={{ color: colors.mainGold }}
//         >
//           Project Leadership & Execution
//         </motion.h2>

//         <p className="text-gray-300 max-w-3xl mx-auto paragraph mb-8">
//           Our approach ensures precision, efficiency, and excellence at every project stage.
//         </p>

//         <div className="grid md:grid-cols-2 gap-2 justify-center">
//           {cards.map(({ title, text, icon }, index) => (
//             <div
//               key={index}
//               className="group relative p-3 md:p-10 w-full max-w-[480px] mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20"
//             >
//               <div className="text-mainGold text-5xl mb-5 flex justify-center group-hover:rotate-12 transition-transform duration-500">
//                 {icon}
//               </div>
//               <h3 className="text-2xl font-semibold mb-3 text-mainGold">
//                 {title}
//               </h3>
//               <p className="text-gray-300 leading-relaxed">{text}</p>

//               <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

