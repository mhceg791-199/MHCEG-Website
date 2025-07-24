import React from "react";
import { useInView } from "react-intersection-observer";
import "./MHCEG-Numbers.css";
import useCountUp from "../../../hooks/useCountUp";

function MHCEG_Numbers() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const oneHundred = useCountUp(100, inView, 6000);
  const oneHundredFifty = useCountUp(150, inView, 8000);
  const ten = useCountUp(10, inView, 2000);
  const twenty = useCountUp(25, inView, 4000);

  const numbersDetails = [
    {
      number: twenty,
      icon: "+",
      text: "Engineers",
    },
    {
      number: ten,
      icon: "+",
      text: "Industries Served",
    },
    {
      number: oneHundredFifty,
      icon: "+",
      text: "Years of Expertise",
    },
    {
      number: oneHundred,
      icon: "+",
      text: "Successful Projects",
    },
  ];
  return (
    <>
      <section className="  text-white background  w-screen   ">
        <div className=" ">
          <h2 className=" ps-6   mb-10">MHCEG in Numbers</h2>
          <div
            ref={ref}
            className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-2"
          >
            {numbersDetails.map(({ icon, text, number }, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1  text-center ">
                  <p className="md:text-large">{text}</p>
                  <div className="flex justify-center lg:text-[50px] md:text-[30px] font-bold">
                    <p className="pe-1 text-xxxl">{number}</p>
                    <p className="text-xxxl">{icon}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MHCEG_Numbers;
