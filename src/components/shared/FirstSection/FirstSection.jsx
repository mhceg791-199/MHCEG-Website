import React from "react";

function FirstSection({ title, image }) {
  return (
    <>
      <div
        data-aos="fade-down"
        style={{ backgroundImage: `url(${image})` }}
        className={` bg-no-repeat bg-fixed bg-cover bg-cener text-white h-[60vh] relative `}
      >
        <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-mainLayer z-10 ">
          <h1 className="">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
