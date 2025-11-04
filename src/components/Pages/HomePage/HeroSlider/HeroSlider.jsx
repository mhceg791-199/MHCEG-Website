import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import homeSlides from "../../../../data/homeSlider";
import { useNavigate } from "react-router-dom";

const SLIDE_DURATION = 6;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const nav = useNavigate();

  // ✅ Slide Cache لتقليل إعادة الحساب
  const slide = useMemo(() => homeSlides[index], [index]);

  // ✅ مؤقت خفيف بدون Re-render لكل tick
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((prevIndex) => (prevIndex + 1) % homeSlides.length);
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION * 10);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // ✅ Preload للـ Slide الجاي
  useEffect(() => {
    const nextSlide = homeSlides[(index + 1) % homeSlides.length];
    if (nextSlide.type === "image") {
      const img = new Image();
      img.src = nextSlide.src;
      img.decode?.();
    }
  }, [index]);

  // ✅ تحسين overlay حسب النوع
  const overlayColor =
    slide.type === "image"
      ? "rgba(26, 52, 66, 0.5)"
      : "rgba(197, 163, 99, 0.45)";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ الصورة أو الفيديو — تحميل خفيف */}
      {slide.type === "image" ? (
        // <img
        //   src={slide.src}
        //   alt="mhceg slide"
        //   loading="lazy"
        //   decoding="async"
        //   className="absolute inset-0 w-full h-full object-cover"
        // />
        <img
          src={slide.src}
          alt="mhceg slide"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        // <video
        //   src={slide.src}
        //   autoPlay
        //   muted
        //   loop
        //   playsInline
        //   preload="metadata"
        //   className="absolute inset-0 w-full h-full object-cover"
        // />
        <video
          src={slide.src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ✅ Overlay أساسي */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Overlay Animation محسّن */}
      <motion.div
        key={slide.id}
        initial={{ width: "100%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full"
        style={{ backgroundColor: overlayColor, zIndex: 5 }}
      />

      {/* ✅ النصوص */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white max-w-3xl">
        <motion.h1
          key={"title-" + slide.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={"desc-" + slide.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="paragraph opacity-90"
        >
          {slide.desc}
        </motion.p>

        <div>
          <button
            onClick={() => nav("/about")}
            className="mt-8 btn-boder-white"
          >
            Explore Our Perspective →
          </button>
        </div>
      </div>

      {/* ✅ البار السفلي */}
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
                  transition={{ ease: "linear" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
