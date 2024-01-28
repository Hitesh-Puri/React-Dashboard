import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.user) {
        navigate("/login")
      }
  }, [auth.user, navigate]);

  return children;
};
