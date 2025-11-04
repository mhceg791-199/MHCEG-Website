import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import homeSlider from "../../../../data/homeNews";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

export default function News() {
  return (
    <section className="relative md:py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* 🟡 العنوان */}
      <div className="text-center mb-4 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
          <SectionHeader firstWord={"Latest"} secondWord={"News" }/>
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Discover the latest updates, insights, and innovations from MHCEG.
        </p>
      </div>

      <div className="px-5 md:px-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          freeModeMomentum={false}
          allowTouchMove={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
          }}
          className="!overflow-visible pb-14" 
        >
          {[...homeSlider, ...homeSlider].map((h, i) => (
            <SwiperSlide
              key={i}
              className="!h-[22rem] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={h.logo}
                alt={h.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full text-white px-6 pb-6 transition-all duration-500 group-hover:translate-y-[-10px]">
                <h4 className="heading font-semibold mb-2 text-mainGold">
                  {h.title}
                </h4>
                <p className="paragraph text-gray-200 line-clamp-1">{h.text}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-6">
                <div>
                  <h4 className="heading font-bold mb-3 text-mainGold">
                    {h.title}
                  </h4>
                  <p className="text-gray-100 paragraph leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination {
          bottom: -25px !important; 
        }
        .swiper-pagination-bullet {
          background: #c5a363 !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #c5a363 !important;
          opacity: 1 !important;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
