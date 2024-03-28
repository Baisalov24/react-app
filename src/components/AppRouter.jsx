import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/Loader/Loader";
import { AuthContext } from "../context";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    
    if (isLoading) {
        return <Loader/>
    }
  return (
    isAuth 
    ? 
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
    : 
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
