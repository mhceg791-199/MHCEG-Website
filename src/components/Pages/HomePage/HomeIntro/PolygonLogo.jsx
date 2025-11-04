import { motion } from "framer-motion";
import React from "react";
import logo from "../../../../assets/logo/intro.png"; 

const FloatingSpinLogo = () => {
  return (
    <div className="flex justify-center items-center w-full h-[300px] bg-[#0E1B23] overflow-hidden">
      <motion.div
        style={{
          width: 120,
          height: 120,
          perspective: 800, // عشان يبان تأثير العمق
        }}
      >
        <motion.img
          src={logo}
          alt="Rotating Logo"
          className="w-full h-full object-contain"
          animate={{
            rotateY: [0, 180, 360], // دوران أفقي مستمر
            opacity: [1, 0, 1], // يختفي عند 180 درجة
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingSpinLogo;
