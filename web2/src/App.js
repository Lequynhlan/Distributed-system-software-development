import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Cart2 } from "./ProductGetApi/GlobalState";


import Login from "./ProductGetApi/components/mainpages/auth/Login";
import Register from "./ProductGetApi/components/mainpages/auth/Register";



export default function App() {
  const location = useLocation();
  const state = useContext(Cart2);

  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
        <Route
          path="/register"
          element={isLogged ? <Register /> : <NotFound />}
        />
       </Routes>
    </div>
  );
}
