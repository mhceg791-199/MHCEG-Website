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

      <section>
        <h1 data-aos="fade-up" className="">
          MHCEG Consultancy: Engineering Excellenc
        </h1>
        <p data-aos="fade-up" className="my-5">
          At MHCEG Consultancy, a proud subsidiary of Mosaic Holding
          Corporation, we specialize in delivering high-quality,customized
          engineering solutions with efficiency, professionalism, and precision.
          Our team of industry experts brings a wealth of knowledge and
          experience to every project, ensuring that our solutions meet the
          highest
        </p>
        <p data-aos="fade-up">
          standards of excellence. With an unwavering commitment to innovation,
          integrity, and technical expertise, we work closely with our clients,
          understanding their unique needs and challenges to develop tailored
          strategies that optimize performance and enhance project outcomes. By
          leveraging advanced technologies, sustainable practices, and a
          collaborative approach, we drive progress, efficiency, and long-term
          success across diverse industries
        </p>
      </section>
      <MHCEG_Numbers />
      <WhyMHCEG />
    </>
  );
}

export default Home;
