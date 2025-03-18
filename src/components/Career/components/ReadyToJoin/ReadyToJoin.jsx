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
            Ready to Join Us?
          </h2>
          <p className="text-center mt-5">
            If you’re inspired to shape the future with a team that values
            ambition, excellence, and professional growth, MHCEG is the place
            to elevate your career. Explore our current opportunities and join a
            company that invests in your potential to drive industry evolution.
          </p>
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
