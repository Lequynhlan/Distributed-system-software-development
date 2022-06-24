import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Cart2 } from "./ProductGetApi/GlobalState";

import Product2 from "./ProductGetApi/components/products/Products";
import CreateProduct from "./ProductGetApi/components/createProduct/CreateProduct";
export default function App() {
  const location = useLocation();
  const state = useContext(Cart2);

  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/products" element={<Product2 />} />
        <Route
          path="/create_product"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
        <Route
          path="/edit_product/:id"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
      </Routes>
    </div>
  );
}
