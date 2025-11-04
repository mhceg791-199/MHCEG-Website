import s2 from "../../../../assets/about/mission/values.webp";
import dataValues from "../../../../data/values";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

function Values() {
  
return (
    <section
      className="relative text-white md:py-20 px-6 overflow-hidden md:h-screen flex items-center justify-center"
    >
      {/* image background */}
      <img
  src={s2}
  alt="background"
  className="absolute inset-0 w-full h-full object-cover"
  loading="lazy"
/>


      {/*  overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* <h2 className="heading-3 font-bold mb-4 text-mainGold tracking-wide">
          Our Values
        </h2> */}
        <div className="mb-5">
        <SectionHeader firstWord="OUR VALUES"  />

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dataValues.map(({ title, text, icon }, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20"
            >
              <div className="text-mainGold text-4xl mb-4 flex justify-center group-hover:rotate-12 transition-transform duration-500">
                {icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-gray-400 paragraph">{text}</p>

              <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="bg-gray-50 py-20">
  //     <div className="max-w-7xl mx-auto px-6 lg:px-10">
  //       <h2 className="text-center heading text-gray-800 mb-14 tracking-wide">
  //         <SectionHeader firstWord="OUR" secondWord="VALUES" />
  //       </h2>

  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
  //         {values.map(({ image, title, paragraph }, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 40 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.6, delay: index * 0.1 }}
  //             whileHover={{ y: -10 }}
  //             className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
  //           >
  //             <div className="overflow-hidden">
  //               <img
  //                 src={image}
  //                 alt={title}
  //                 className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
  //               />
  //             </div>
  //             <div className="p-6">
  //               <h3 className="text-xl font-semibold text-gray-800 mb-2">
  //                 {title}
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed text-sm">
  //                 {paragraph}
  //               </p>
  //             </div>
  //             <div className="h-[3px] w-0 bg-mainColor group-hover:w-full transition-all duration-500 mx-auto"></div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Values;