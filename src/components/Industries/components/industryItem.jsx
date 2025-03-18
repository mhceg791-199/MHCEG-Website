import React from "react";

function IndustryItem({ industry }) {
  const { title, image, paragraph, type } = industry;
  return (
    <>
      {type == "1" ? (
        <>
          {" "}
          <div className="grid bg-mainColor md:gap-10 gap-2 text-white grid-cols-3 ">
            <div className="col-span-2  md:p-16 p-2 flex justify-center flex-col">
              <h3 className="mb-4">{title}</h3>
              <p>{paragraph}</p>
            </div>
            <div className="col-span-1 ">
              <img
                className="w-full md:h-[280px] h-[170px] object-cover bg-fixed"
                src={image}
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="grid md:gap-10 gap-2  grid-cols-3 ">
            <div className="col-span-1 ">
              <img
                className="w-full md:h-[280px] h-[170px] object-cover bg-fixed"
                src={image}
                alt=""
              />
            </div>
            <div className="col-span-2  md:p-16 p-2 flex justify-center flex-col">
              <h3 className="mb-4">{title}</h3>
              <p>{paragraph}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default IndustryItem;
