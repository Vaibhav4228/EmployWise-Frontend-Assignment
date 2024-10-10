import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouter({ children, token }) {
  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" />;
  }

  // Render children (protected component) if token is valid
  return children;
}

export default ProtectedRouter;
