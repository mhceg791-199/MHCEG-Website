import Paragraph from "../Paragraph/Paragraph";
import SectionHeader from "../PrivacyAndTerms/sectionHeader/sectionHeader";

function SustainabilityCard({
  img,
  firstWord,
  secondWord,
  type = "vertical",
  p,
  icon,
}) {
  console.log(firstWord);

  // const { poster, logo, title, text, link = "" } = data;
  return (
    <div className="bg-bl mb-0 md:p-4">
      <div className="bg-black md:rounded-ss-[100px] shadow-md p-8 transition-all duration-500 hover:scale-[1.01] min-h-[420px] flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Graphic */}
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full p-2 border-2 border-mainGold  flex items-center justify-center`}
            >
              <img
                src={img}
                alt={firstWord + " " + secondWord}
                className="w-full h-full object-cover rounded-full animate-spin"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="flex justify-between items-center mb-2 text-center sm:text-left">
              <h2 className="heading-3 text-white ">
                <SectionHeader
                  firstWord={firstWord}
                  secondWord={secondWord}
                  type={type}
                />
              </h2>
              {icon && (
                <div className=" border-[3px] me-5 border-mainGold text-mainGold rounded-full flex justify-center  w-16 h-16 items-center ">
                  <img className="w-[70%] " src={icon} alt="icon" />
                </div>
              )}
            </div>
            <p className="text-gray-400 text-justify  my-4">
              <Paragraph p={p} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityCard;
