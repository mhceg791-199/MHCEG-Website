import React from "react";

function ContactInformation() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 rounded-xl text-mainColor bg-white p-8">
        <div className="col-span-1 flex items-center">
          <i className="fa-solid text-xxl pe-2 fa-envelope"></i>
          <div>
            <h3 className="mb-0 leading-none">Email</h3>
            <p className="m-0 leading-none">info@mhceg.com</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          <i className="fa-solid text-xxl pe-2 fa-globe"></i>
          <div>
            <h3 className="mb-0 leading-none">Website</h3>
            <p className="m-0 leading-none">www.mhc-eg.com</p>
          </div>
        </div>
        <div className="col-span-2 flex items-center">
          <i className="fa-solid text-xxl pe-2 fa-map-marker-alt"></i>
          <div>
            <h3 className="mb-0 leading-none">Address</h3>
            <p className="m-0 leading-none">
              13 Sayed Zakareya, Sheraton, Cairo, Egypt
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;
