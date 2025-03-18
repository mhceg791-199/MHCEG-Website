import React from "react";

function WhoWeAre() {
  return (
    <>
      <div className=" lg:w-1/2 sm:w-3/4 w-5/6 sm:px-10  p-5 pb-0 m-auto text-center mt-10 ">
        <h2 className="mb-3">Who We Are</h2>
        <p>
          MHCEG Consultancy is a leading engineering firm committed to
          delivering innovative solutions across various industries. We
          specialize in tailored engineering services that address unique
          project challenges with professionalism and technical expertise.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 px-10 py-5  gap-10 ">
        <div className="col-span-1 flex flex-col justify-center text-justify">
          <p data-aos="fade-right" className="mb-10">
            Our mission is to enhance the built environment by integrating
            sustainable practices, advanced technologies, and client-focused
            strategies. Through collaboration, precision, and a commitment to
            excellence, we strive to develop solutions that drive efficiency,
            safety, and long-term value for our clients worldwide.
          </p>
          <p data-aos="fade-right">
            Over the years, our firm has successfully delivered high-impact
            projects that shape urban landscapes, enhance energy efficiency, and
            improve transportation and industrial infrastructure. By leveraging
            our expertise, we continue to create transformative solutions that
            contribute to a smarter and more sustainable future.
          </p>
        </div>
        <div className="col-span-1 sm:px-20 md:py-2 py-5 flex items-center ">
          <img
            data-aos="flip-down"
            className="w-full rounded-2xl  object-cover"
            src="/about/whoWeAre.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
