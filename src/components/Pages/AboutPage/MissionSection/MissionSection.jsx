import Paragraph from "../../../shared/Paragraph/Paragraph";
import AllCards from "./AllCards";

export default function MissionSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white  px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 items-center max-w-7xl mx-auto">
        <div className="space-y-6 text-gray-800 md:text-justify">
          <h2 className="text-mainGold text-2xl md:text-4xl font-bold leading-tight">
            Redefining Connection
          </h2>
          <h3 className="heading !mt-0 font-bold text-mainColor leading-tight">
            Engineering the Future
          </h3>
          <Paragraph p="Across every industry, our mission is the same — to connect creativity with engineering, transforming ideas into intelligent, enduring realities." />
        </div>

        <AllCards />
      </div>
    </section>
  );
}
