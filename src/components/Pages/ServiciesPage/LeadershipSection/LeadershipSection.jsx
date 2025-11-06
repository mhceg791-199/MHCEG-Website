import { FaTasks, FaHardHat } from "react-icons/fa";
import CircularText from "../CircularText/CircularText";
import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

export default function LeadershipSection() {
  const colors = {
    mainColor: "#1a3442",
    mainLayer: "#1a3442e6",
    mainGold: "#C5A363",
  };

  const cards = [
    {
      icon: <FaTasks className="text-4xl" style={{ color: colors.mainGold }} />,
      title: "Operational Excellence",
      head: "Safety isn’t a step — it’s the standard.",
      text: "Every detail we design and every process we manage reflects an uncompromising commitment to protecting people, quality, and the environments we build within.",
    },
    {
      icon: (
        <FaHardHat className="text-4xl" style={{ color: colors.mainGold }} />
      ),
      title: "Technological Innovation",
      head: "Innovation isn’t an option — it’s our foundation.",
      text: "We integrate intelligent systems, digital engineering, and creative thinking to push boundaries, enhance precision, and shape the next generation of sustainable design.",
    },
  ];

  return (
    <section
      className="text-white md:py-20 px-6 flex justify-center"
      style={{
        background: `linear-gradient(to bottom, ${colors.mainColor}, ${colors.mainLayer})`,
      }}
    >
      <div className="w-full max-w-7xl text-center">
        <div className="mt-5">
          <SectionHeader firstWord={"Built on Safety, Driven by Innovation"} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 text-center">
          <div className="group relative p-6 md:p-10 w-full max-w-[480px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20">
            <div className="text-mainGold text-5xl mb-5 flex justify-center group-hover:rotate-12 transition-transform duration-500">
              {cards[0].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-mainGold">
              {cards[0].title}
            </h3>
            <h5 className="text-xl font-semibold mb-1">{cards[0].head}</h5>
            <p className="text-gray-300 leading-relaxed">{cards[0].text}</p>
            <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </div>

          {/* Circular Text*/}
          <div className="flex justify-center items-center w-[160px] h-[160px]">
            <CircularText
              text="MHCEG*CONSULTANCY*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>

          <div className="group relative p-6 md:p-10 w-full max-w-[480px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20">
            <div className="text-mainGold text-5xl mb-5 flex justify-center group-hover:rotate-12 transition-transform duration-500">
              {cards[1].icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-mainGold">
              {cards[1].title}
            </h3>
            <h5 className="text-lg font-semibold mb-1">{cards[1].head}</h5>
            <p className="text-gray-300 leading-relaxed">{cards[1].text}</p>
            <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
