import { motion } from "framer-motion";

function IndustryItem({ industry }) {
  const { title, image, paragraph, type } = industry;

  const isTypeOne = type === "1";

  return (
    <section
      className={`relative flex flex-col md:flex-row gap-6 ${
        isTypeOne ? "md:flex-row" : "md:flex-row-reverse"
      } items-center overflow-hidden`}
    >
      {/* background image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3442e6] via-[#1a3442d0] to-transparent" />

      {/* content */}
      <div
        className={`relative z-10 flex flex-col justify-center p-8 md:p-16 text-white 
        w-full md:w-1/2 space-y-4 backdrop-blur-md bg-white/5 rounded-2xl shadow-lg`}
      >
        <motion.h3
          className="text-3xl font-bold text-[#C5A363]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-200 text-lg leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {paragraph}
        </motion.p>
      </div>

      {/* image */}
      <motion.div
        className="relative md:w-1/2 w-full flex justify-center items-center overflow-hidden"
        initial={{ opacity: 0, x: isTypeOne ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default IndustryItem;
