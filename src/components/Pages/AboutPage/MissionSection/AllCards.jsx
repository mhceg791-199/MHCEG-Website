import CardSwap, { Card } from "../CardSwap/CardSwap";
import card1 from "../../../../assets/about/card/c1.webp";
import card2 from "../../../../assets/about/card/c2.webp";
import card3 from "../../../../assets/about/card/c3.webp";

export default function AllCards() {
  return (
    <div className="relative h-[440px] md:h-[500px] flex justify-center items-center">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={4000}
        pauseOnHover={true}
      >
        <Card className="overflow-hidden shadow-2xl rounded-2xl border-none bg-white max-w-[170px] max-h-[240px]
    md:max-w-full md:max-h-full">
          <img
            src={card1}
            alt="Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mainColor/70">
            <p className="paragraph text-white p-3 bg-white/5 backdrop-blur-sm">
              Innovation
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-2xl rounded-2xl border-none bg-white max-w-[170px] max-h-[240px]
    md:max-w-full md:max-h-full">
          <img
            src={card2}
            alt="Sustainability"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-mainColor/70">
            <p className="paragraph text-white p-3 bg-white/5 backdrop-blur-sm">
              Sustainability
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-2xl rounded-2xl border-none bg-white relative max-w-[170px] max-h-[240px]
    md:max-w-full md:max-h-full">
          <img
            src={card3}
            alt="Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mainColor/70">
            <p className="paragraph text-white p-3 bg-white/5 backdrop-blur-sm">
              Excellence
            </p>
          </div>
        </Card>
      </CardSwap>
    </div>
  );
}
