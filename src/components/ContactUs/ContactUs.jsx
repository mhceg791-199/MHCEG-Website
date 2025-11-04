import Map from "./components/map/Map";
import FirstSectionByVideo from "../shared/FirstSectionByVideo/FirstSectionByVideo";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactMapDetails from "./components/ContactMapDetails/ContactMapDetails";
function ContactUs() {
  return (
    <>
      <FirstSectionByVideo title="Contact Us" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 text-black px-6 md:px-16 items-start">
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full md:w-10/12">
            <ContactForm />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <div className="w-full md:w-10/12">
            <ContactMapDetails />
          </div>
        </div>
      </div>

      <Map />
    </>
  );
}

export default ContactUs;
