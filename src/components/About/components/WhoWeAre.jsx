
function WhoWeAre() {
  return (
    <>
      <div className=" lg:w-1/2 sm:w-3/4 w-5/6 sm:px-10  p-5 pb-0 m-auto md:text-center mt-10 ">
        <h2 className="mb-3">Who We Are</h2>
        <p>
          MHCEG Consultancy is a premier engineering and architecture firm dedicated to delivering innovative, sustainable solutions across the MENA region, Canada, and beyond. We combine technical expertise with a client-focused approach to address complex project challenges, shaping urban landscapes, enhancing infrastructure, and advancing energy-efficient design. </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 px-10 py-5 my-5  w-11/12 m-auto gap-10 ">
        <div className="col-span-1 flex flex-col justify-center  md:text-justify">
          <p data-aos="fade-right" className="mb-10">
            Our mission is to elevate the built environment through cutting-edge engineering, collaborative partnerships, and a steadfast commitment to excellence. By integrating sustainable practices and visionary design, we create spaces that drive efficiency, safety, and lasting value for communities worldwide. </p>
          <p data-aos="fade-right">
            Over the years, we have successfully delivered transformative projects that redefine skylines, optimize industrial performance, and pioneer smart, sustainable development. Leveraging our expertise, we continue to push boundaries, contributing to a future where innovation and functionality coexist seamlessly. </p>
        </div>
        <div className="col-span-1 sm:px-20 md:py-2 py-5 flex items-center ">
          <img
            data-aos="flip-down"
            className="w-[90%] rounded-2xl  object-cover"
            src="/about/whoWeAre.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
