import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from ".";
import { HOST_WEB } from "../../constants/web_host";
import Home from "../Home";
import Login from "../Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${HOST_WEB}/`} element={<Login />} />
        <Route path={`/${HOST_WEB}/home`} element={<PrivateRoutes />}>
          <Route path={`/${HOST_WEB}/home`} element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
