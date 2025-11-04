import map from "../../../../assets/world-map-gold.jpg";

function ContactMapDetails() {
  return (
    <div className=" w-full bg-mainColor text-white rounded-b-sm overflow-hidden shadow-lg border border-mainGold/30">
      <div className="relative w-full border-8 bg-mainColor border-mainColor">
        <img src={map} alt="map" className="w-full object-cover h-64 md:h-72" />
        <div className="absolute inset-0 bg-mainColor/50 to-transparent pointer-events-none"></div>
      </div>

      <div className="py-6 px-6">
        <h3 className="text-2xl font-semibold text-mainGold pb-4 border-b border-mainGold/30">
          CONTACT US
        </h3>

        {/* Address */}
        <div className="flex items-start gap-4 mt-6">
          <i className="fa-solid fa-location-dot text-mainGold text-2xl mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <a
              href="https://www.google.com/maps/place/MHCEG+Consultancy/@30.095071,31.377573,19z/data=!4m6!3m5!1s0x1458170fc8fac3f1:0xfa684f459ccde77d!8m2!3d30.0950243!4d31.3775809!16s%2Fg%2F11vkklsd9b?hl=ar&entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-md hover:text-mainGold transition-colors duration-300"
            >
              13 Sayed Zakareya, Sheraton, Cairo, Egypt
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 mt-5">
          <i className="fa-solid fa-earth-americas text-mainGold text-2xl mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold">Do you have a Question?</h4>
            <a
              href="mailto:info@mosaicholding.com"
              className="text-gray-400 text-md hover:text-mainGold transition-colors duration-300"
            >
              info@mhceg.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMapDetails;
