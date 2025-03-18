import React from "react";
import FirstSection from "../shared/FirstSection/FirstSection";
import ReadyToJoin from "./components/ReadyToJoin/ReadyToJoin";

function Career() {
  return (
    <>
      <FirstSection title={"Career"} image={"/career/career.webp"} />
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-3/4 w-full m-auto md:p-16 p-5 md:items-center">
        <div className="col-span-1 text-mainColor">
          <p className="text-xxxl font-semibold leading-10">
            Join Our Team of Visionary Engineers
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-lg">
            Join MHCEG and be part of a team that values innovation, excellence,
            and a commitment to shaping the future of engineering
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(/career/career2.webp)` }}
        className="bg-no-repeat bg-fixed bg-contain bg-center flex justify-center items-center text-center text-white md:h-[60vh] h-[40vh] w-full"
      ></div>
      <ReadyToJoin />
    </>
  );
}

export default Career;
