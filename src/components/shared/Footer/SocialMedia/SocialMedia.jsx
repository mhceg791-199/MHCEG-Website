import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <>
      <div className="grid grid-cols-4  justify-evenly">
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.instagram.com/mosaicholding_corporation/"
          >
            <i className="fa-brands fa-instagram text-white rounded-full p-2 text-lg border-white border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.facebook.com/p/MHCEG-Consultancy-61552204134546/"
          >
            <i className="fa-brands fa-facebook text-white rounded-full p-2 text-lg border-white border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link target="_blank" to="https://x.com/MosaicHoldingCo">
            <i className="fa-brands fa-x-twitter text-white rounded-full p-2 text-lg border-white border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/mhceg-consultancy/posts/?feedView=all"
          >
            <i className="fa-brands fa-linkedin text-white rounded-full p-2 text-lg border-white border-[3px]"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
