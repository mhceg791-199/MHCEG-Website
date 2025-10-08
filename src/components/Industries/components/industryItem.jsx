
import React from "react";

function IndustryItem({ industry }) {
  const { title, image, paragraph, type } = industry;

  const TextBlock = (
    <div className="col-span-2 md:p-16 p-4 flex justify-center flex-col font-sans text-textLight">
      <h3 className="mb-4 text-large leading-normal tracking-wide font-semibold">
        {title}
      </h3>
      <p className="text-base leading-relaxed tracking-wide text-textLight/90">
        {paragraph}
      </p>
    </div>
  );

  const ImageBlock = (
    <div className="col-span-1">
      <img
        className="w-full md:h-[280px] h-[170px] object-cover"
        src={image}
        alt={title}
      />
    </div>
  );

  return (
    <>
      {type === "1" ? (
        <div
          className="grid bg-mainColor md:gap-10 gap-2 text-white grid-cols-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {TextBlock}
          {ImageBlock}
        </div>
      ) : (
        <div
          className="grid md:gap-10 gap-2 grid-cols-3 bg-white text-textDark"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {ImageBlock}
          {TextBlock}
        </div>
      )}
    </>
  );
}

export default IndustryItem;








// import React from "react";

// function IndustryItem({ industry }) {
//   const { title, image, paragraph, type } = industry;
//   return (
//     <>
//       {type == "1" ? (
//         <>
//           {" "}
//           <div
//             className="grid bg-mainColor md:gap-10 gap-2 text-white grid-cols-3 "
//             data-aos="fade-right"
//             data-aos-offset="300"
//             data-aos-easing="ease-in-sine"
//           >
//             <div className="col-span-2  md:p-16 p-2 flex justify-center flex-col">
//               <h3 className="mb-4">{title}</h3>
//               <p>{paragraph}</p>
//             </div>
//             <div className="col-span-1 ">
//               <img
//                 className="w-full md:h-[280px] h-[170px] object-cover bg-fixed"
//                 src={image}
//                 alt=""
//               />
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           {" "}
//           <div
//             className="grid md:gap-10 gap-2  grid-cols-3 "
//             data-aos="fade-left"
//             data-aos-offset="300"
//             data-aos-easing="ease-in-sine"
//           >
//             <div className="col-span-1 ">
//               <img
//                 className="w-full md:h-[280px] h-[170px] object-cover bg-fixed"
//                 src={image}
//                 alt=""
//               />
//             </div>
//             <div className="col-span-2  md:p-16 p-2 flex justify-center flex-col">
//               <h3 className="mb-4">{title}</h3>
//               <p>{paragraph}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default IndustryItem;
