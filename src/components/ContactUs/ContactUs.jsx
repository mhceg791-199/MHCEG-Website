import React from "react";
import Map from "./components/map/Map";
import Form from "./components/form/Form";
import ContactInformation from "./components/contactInformation/ContactInformation";
function ContactUs() {
  return (
    <>
      <div className="bg-mainColor">
        <img
          className="h-[80vh] object-cover w-full"
          src="/contactUs/contactUs.webp"
          alt=""
        />

        <div className="text-center mt-20 text-white">
          <h1 className="text-base">CONTACT US</h1>
          <p className="text-xxxl font-semibold">Get in touch!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
          <div className="col-span-1">
            <Form />
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <ContactInformation />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:h-screen mt-10 md:mt- text-black items-center md:px-10">
          <div className="col-span-2">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
