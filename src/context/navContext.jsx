import React, { createContext, useContext, useState } from "react";

// Create the context
const NavContext = createContext();

// Provider component
export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  // Toggle function to open/close the navigation
  const toggleNav = (prev) => {
    setNavOpen(prev);
  };

  return (
    <NavContext.Provider value={{ navOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
