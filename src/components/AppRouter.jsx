import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
