import React, { useContext } from "react";
import CareerModal from "./BriefCareer/CareerModel/CareerModel";
import { careerModalContext } from "../../../../context/careerContext";

function ReadyToJoin() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="bg-mainColor my-5 text-white py-8">
        <div className="  w-3/4 m-auto">
          <h2 className="text-mainBrown text-center font-semibold custom-text-xl">
            Ready to Build Tomorrow?
          </h2>
          <p className="text-center mt-5">
            If you’re driven by excellence and eager to leave your mark on the built environment, explore our opportunities. At MHCEG, we invest in your potential, empower your ambition, and champion your journey to redefine engineering excellence.</p>
          <div className="text-center mt-5">
            <button
              onClick={() => {
                openModal();
              }}
              className="bg-white rounded-full px-8 py-2  text-mainColor font-semibold m-auto text-center"
            >
              Become Part of Our Team
            </button>
            <CareerModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToJoin;
