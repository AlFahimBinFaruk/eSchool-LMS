import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/watch?v=dD9O8DnIBj4"
  );
  return (
    <AppContext.Provider
      value={{
        videoLink,
        setVideoLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
