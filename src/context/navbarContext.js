import React, { useState } from "react";

const NavbarContext = React.createContext();

const NavbarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavbarProvider };
