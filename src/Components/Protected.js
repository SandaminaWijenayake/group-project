import React from "react";
import { Navigate } from "react-router-dom";

const Protection = ({ isSignedIn, children }) => {
  if (!isSignedIn) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default Protection;
