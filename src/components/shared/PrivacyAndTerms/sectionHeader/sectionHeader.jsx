import React from "react";
import "./sectionHeader.css";
import { Link } from "react-router-dom";

function SectionHeader({
  firstWord,
  secondWord,
  fontSize = "large",
  type = "horizontal",
  line = true,
  link = "",
}) {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className={`${
          link ? "cursor-pointer" : "cursor-default"
        } text-${fontSize}   headerSection font-bold `}
      >
        <h1 className="text-mainColor">
          <span className=" ">{firstWord}</span>
          <span> {secondWord}</span>
        </h1>
      </Link>
    </>
  );
}

export default SectionHeader;
