import React from "react";

function TitleWithText({ title, paragraph }) {
  return (
    <div className="my-6">
      <h2 className=" text-mainColor headerSection font-bold ">
        <>
          <span>
            <span className=" ">{title}</span>
          </span>
        </>
      </h2>
      <p className={` sm:text-base text-[12px] text-justify mt-1`}>
        {paragraph}
      </p>
    </div>
  );
}

export default TitleWithText;
