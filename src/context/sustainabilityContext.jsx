import React, { createContext } from "react";
import sustainabilitiesData from "./data/sustainabilitiesData";

export const sustainabilityContext = createContext(null);
function SustainabilityContextProvider({ children }) {
  
  const sustainabilityDetails = sustainabilitiesData;

  const getSustainBySlug = (slug) => {
    return sustainabilityDetails.filter((sus) => sus.slug == slug)[0];
  };
  return (
    <sustainabilityContext.Provider
      value={{ sustainabilityDetails, getSustainBySlug }}
    >
      {children}
    </sustainabilityContext.Provider>
  );
}

export default SustainabilityContextProvider;
