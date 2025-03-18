import React from "react";
import "./map.css";
function Map() {
  return (
    <>
      <div className=" mb-3 ">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.9853703979895!2d31.3784912724544!3d30.095024296862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458170fc8fac3f1%3A0xfa684f459ccde77d!2sMHCEG%20Consultancy!5e0!3m2!1sar!2seg!4v1741769150459!5m2!1sar!2seg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
