import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeSlides from "../../../../data/homeSlider";
import { useNavigate } from "react-router-dom";



const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const nav = useNavigate();

  const duration = 6; // مدة كل سلايد بالثواني

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((prevIndex) => (prevIndex + 1) % homeSlides.length);
          return 0;
        }
        return prev + 100 / (duration * 10);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const slide = homeSlides[index];

  // تحديد لون الطبقة حسب نوع الـ slide
  const overlayColor =
    slide.type === "image"
      ? "rgba(26, 52, 66, 0.5)" // #1a3442 بشفافية خفيفة
      : "rgba(197, 163, 99, 0.5)"; // #C5A363 بشفافية خفيفة

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* الخلفية */}
      {slide.type === "image" ? (
        <img
          src={slide.src}
          alt="mhceg image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          src={slide.src}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* الـ overlay الأساسي */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* الـ overlay المتحرك */}
      <motion.div
        key={slide.id + "-overlay"}
        initial={{ width: "100%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{
          backgroundColor: overlayColor,
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
      ></motion.div>

      {/* النص الرئيسي */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white max-w-3xl">
        <motion.h1
          key={slide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={slide.id + "-desc"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="paragraph opacity-90"
        >
          {slide.desc}
        </motion.p>

        <div>
          <button onClick={()=> nav("/about")} className="mt-8 btn-boder-white">
            Explore Our Perspective →
          </button>
        </div>
      </div>

      {/* الـ bottom sections */}
      <div className="absolute z-20 bottom-5 left-0 w-full flex justify-around text-white bg-black/20 backdrop-blur-sm py-3">
        {slide.bottom.map((item, i) => (
          <div key={i} className="text-center w-1/4">
            <p className="paragraph">{item.title}</p>
            <div className="w-3/4 h-1 bg-white/30 mx-auto mt-2">
              {i === index % 4 && (
                <motion.div
                  className="h-1 bg-mainGold"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
