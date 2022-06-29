import React from "react";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  return signed ? <Outlet /> : <Navigate to="/" />;
};
