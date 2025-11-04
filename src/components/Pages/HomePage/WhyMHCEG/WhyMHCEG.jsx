import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import features from "../../../../data/homeFeatures";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

function WhyMHCEG() {
  return (
    <section className="relative md:py-12 overflow-hidden bg-black text-white">
      {/*background*/}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-mainColor"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* circle lights*/}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-mainColor rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <SectionHeader firstWord={"Why"} secondWord={"MHCEG" }/>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-3/4 mx-auto text-gray-300 paragraph mb-8 md:mb-16"
        >
          We don’t just meet industry standards, we redefine them. By
          integrating BIM, AI-driven analytics, 4D augmented reality, and
          cloud-based project management, we ensure real-time collaboration,
          risk mitigation, and unparalleled efficiency—24/7, anywhere in the
          world. At MHCEG, we turn projects into success stories.
        </motion.p>

        {/* bullings */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-10 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 30px rgba(197,163,99,0.25)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              className="group bg-[#151515]/80 border border-[#c5a363]/20 rounded-2xl p-6 text-left backdrop-blur-lg transition-all duration-150 cursor-pointer hover:border-mainGold/60"
            >
              <div className="flex items-center mb-3">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#2b2b2b] to-[#1a1a1a] overflow-hidden mr-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles
                    className="text-[#c5a363] group-hover:text-mainGold transition-colors duration-300"
                    size={22}
                  />
                </motion.div>
                <h4 className="heading font-medium text-mainGold group-hover:text-[#f0d89f] transition-colors duration-300">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 paragraph leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMHCEG;
