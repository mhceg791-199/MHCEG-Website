import { lazy, Suspense } from "react";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";
const LazyCarousel = lazy(() => import("./Carousel"));

function CarouselSection() {
  return (
    <>
      <div className={`text-center md:text-start md:ms-20 md:pt-6 my-6`}>
        <SectionHeader firstWord={"Sustainability & Innovation"} />
      </div>
      <div className="flex items-center justify-center md:my-10 h-[600px] w-full">
        <div className="w-[95%]">
          <Suspense
            fallback={<div className="text-white text-center">Loading...</div>}
          >
            <LazyCarousel />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default CarouselSection;

