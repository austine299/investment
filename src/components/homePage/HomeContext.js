// MyContextProvider.js
import React, { useState, createContext, useEffect } from 'react';

export const MyContext = createContext();

const HomeContext = ({ children }) => {
   const [sectionName, setSectionName] = useState(() => {
    return localStorage.getItem("sectionName") || "home";
  });

  useEffect(() => {
    localStorage.setItem("sectionName", sectionName);
  }, [sectionName]);


  return (
    <MyContext.Provider value={{ sectionName, setSectionName}}>
      {children}
    </MyContext.Provider>
  );
};

export default HomeContext;
