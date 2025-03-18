import React, { createContext } from "react";

export const sericesContext = createContext(null);
function ServicesContextProvider({ children }) {
  const servicesDetails = [
    {
      name: "MASTER & URBAN PLANNING",
      img: "/services/1.webp",
      text: "We design sustainable, functional urban spaces that inspire community growth.",
    },
    {
      name: "INTERIOR DESIGN",
      img: "/services/2.webp",
      text: "We create sophisticated, functional interiors that harmonize style and purpose, customized to our clients’ unique vision and needs.",
    },
    {
      name: "RESIDENTIAL",
      img: "/services/3.webp",
      text: "We design luxurious single-family homes and multifamily complexes, emphasizing comfort, innovation, and livability.",
    },
    {
      name: "COMMERCIAL",
      img: "/services/4.webp",
      text: "We create commercial spaces that blend functionality and design excellence to enhance productivity and drive success.",
    },
    {
      name: "ADMINISTRATIVE",
      img: "/services/5.webp",
      text: "We design efficient, sophisticated administrative spaces that balance aesthetics and performance for tailored office solutions.",
    },
    {
      name: "HEALTH CARE",
      img: "/services/6.webp",
      text: "We create innovative, compassionate healthcare facilities that prioritize patient care, functionality, and operational excellence.",
    },
    {
      name: "CULTURAL BUILDINGS",
      img: "/services/7.webp",
      text: "We design cultural buildings that celebrate heritage and creativity, inspiring and engaging communities with lasting impact.",
    },
    {
      name: "THEME PARK",
      img: "/services/8.webp",
      text: "We create innovative, immersive theme parks that captivate and inspire visitors of all ages.",
    },
    {
      name: "SET DESIGNS",
      img: "/services/9.webp",
      text: "We design dynamic, visually striking sets that blend artistry and technical expertise to bring stories to life.",
    },
    {
      name: "WATER FEATURES",
      img: "/services/10.webp",
      text: "We create captivating water features that enhance any space with elegance, tranquility, and sensory appeal.",
    },
    {
      name: "BUILDING BOOKLET & PERMITS",
      img: "/services/11.webp",
      text: "We provide building booklets and manage permits, ensuring compliance and project excellence.",
    },
  ];
  return (
    <sericesContext.Provider value={{ servicesDetails }}>
      {children}
    </sericesContext.Provider>
  );
}

export default ServicesContextProvider;
