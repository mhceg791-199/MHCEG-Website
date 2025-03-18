import React from "react";

function MissionAndVission() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 bg-mainColor text-white">
        <div data-aos="fade-right" className="col-span-1 p-10">
          <h2 className="mb-3">OUR MISSION</h2>
          <p >
            To be a trusted engineering partner delivering sustainable,
            cutting-edge, and innovative solutions for complex projects
            worldwide.
          </p>
        </div>
        <div data-aos="fade-left" className="col-span-1 p-10">
          <h2 className="mb-3">OUR VISSION</h2>
          <p>
            To be a trusted engineering partner delivering sustainable,
            cutting-edge, and innovative solutions for complex projects
            worldwide
          </p>
        </div>
      </div>
    </>
  );
}

export default MissionAndVission;
