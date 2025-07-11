import React from "react";
import MHCEG_Numbers from "../shared/MHCEG-Numbers/MHCEG-Numbers";
import WhyMHCEG from "./components/WhyMHCEG/WhyMHCEG";

function Home() {
  return (
    <>
      <video
        className="w-full h-[80vh] object-cover"
        autoPlay
        muted
        loop
        src="/home/homeVideo.mp4"
      ></video>

      <section className="my-5  m-auto">
        <h1 data-aos="fade-up" className="">
          MHCEG Consultancy: Redefining Engineering Excellence 
        </h1>
        <p data-aos="fade-up" className="my-5 w-3/4">
          As a premier subsidiary of Mosaic Holding Corporation, MHCEG Consultancy delivers cutting-edge, bespoke engineering solutions with uncompromising precision and innovation. Our team of seasoned industry experts combines decades of hands-on experience with next-generation technologies to transform complex challenges into high-performance, sustainable outcomes.</p>
        {/* <p data-aos="fade-up">
          standards of excellence. With an unwavering commitment to innovation,
          integrity, and technical expertise, we work closely with our clients,
          understanding their unique needs and challenges to develop tailored
          strategies that optimize performance and enhance project outcomes. By
          leveraging advanced technologies, sustainable practices, and a
          collaborative approach, we drive progress, efficiency, and long-term
          success across diverse industries
        </p> */}
      </section>
      <MHCEG_Numbers />
      <WhyMHCEG />
    </>
  );
}

export default Home;
