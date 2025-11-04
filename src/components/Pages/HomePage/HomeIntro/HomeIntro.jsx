import { motion } from "framer-motion";
import logo from "../../../../assets/about/sustainability/logo.webp";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function HomeIntro() {
  const nav = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:py-20 px-6 md:px-16 bg-white">
      {/* الجزء الأيسر – أنيميشن اللوجو */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[220px] h-[220px] flex justify-center items-center"
        >
          <motion.img
            src={logo}
            alt="MHCEG Logo"
            className="w-[180px] h-[180px] object-contain animate-spin"
            style={{ animationDuration: "4s" }}
            // initial={{ rotate: 0 }}
            // animate={{ rotate: 360 }}
            // transition={{
            //   repeat: Infinity,
            //   duration: 12,
            //   ease: "linear",
            // }}
          />
        </motion.div>
      </div>

      {/* الجزء الأيمن – المحتوى النصي */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
          What We Do
        </p>
        <h1 className="text-mainGold text-3xl md:text-4xl font-bold leading-tight">
          MHCEG Consultancy
        </h1>
        <h2 className="heading font-bold text-mainColor leading-tight">
          Redefining Engineering Excellence
        </h2>

        <div className="flex gap-1 mt-5 mb-2">
          <span className="mt-2 text-mainColor">
            <FaChevronRight size={14} />
          </span>
          <p className=" text-gray-700 paragraph leading-relaxed">
            MHCEG, the Middle East arm of Mosaic Holding Corporation (MHC),
            delivers cutting-edge, bespoke engineering solutions with
            uncompromising precision and innovation.
          </p>
        </div>
        <div className="flex gap-1 mt-5 mb-2">
          <span className="mt-2 text-mainColor">
            <FaChevronRight size={14} />
          </span>
          <p className="text-gray-700 paragraph leading-relaxed">
            Our team of seasoned industry experts combines decades of hands-on
            experience with next-generation technologies to transform complex
            challenges into high-performance, sustainable outcomes.{" "}
          </p>
        </div>

        <div className="flex gap-1 mt-5 mb-2">
          <span className="mt-2 text-mainColor">
            <FaChevronRight size={14} />
          </span>
          <p className="text-gray-700 paragraph leading-relaxed">
            Rooted in creativity and powered by global standards, we reimagine
            how design, engineering, and execution come together — crafting
            solutions that are technically sound, locally attuned, and globally
            competitive.{" "}
          </p>
        </div>

        <div className="flex gap-1 mt-5 mb-2">
          <span className="mt-2 text-mainColor">
            <FaChevronRight size={14} />
          </span>
          <p className="text-gray-700 paragraph leading-relaxed">
            We think like innovators, build like engineers, and partner like
            strategists.{" "}
          </p>
        </div>
        <button
          onClick={() => nav("/about")}
          className="mt-8 btn-boder-blue"
        >
          Learn More →
        </button>
      </div>
    </section>
  );
}

export default HomeIntro;
