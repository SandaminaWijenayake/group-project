import React, { createContext, useState } from "react";

export const GlobleContext = createContext();

const GlobeStateProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobleContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </GlobleContext.Provider>
  );
};

export default GlobeStateProvider;
