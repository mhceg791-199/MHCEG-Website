import React, { createContext } from "react";

export const navbarContext = createContext(null);
function NavbarContextProvider({ children }) {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <navbarContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </navbarContext.Provider>
  );
}

export default NavbarContextProvider;
