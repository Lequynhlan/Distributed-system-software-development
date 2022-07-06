import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Cart2 } from "./ProductGetApi/GlobalState";

import Product2 from "./ProductGetApi/components/products/Products";
import Login from "./ProductGetApi/components/mainpages/auth/Login";
import Register from "./ProductGetApi/components/mainpages/auth/Register";
import Cart3 from "./ProductGetApi/components/mainpages/Cart/Cart";
import NotFound from "./ProductGetApi/components/utils/not_found/NotFound";
import DetailProduct from "./ProductGetApi/components/detailProduct/DetailProduct";
import OrderHistory from "./ProductGetApi/components/history/OrderHistory";
import OrderDetails from "./ProductGetApi/components/history/OrderDetails";
import Categories from "./ProductGetApi/components/categories/Categories";
import CreateProduct from "./ProductGetApi/components/createProduct/CreateProduct";
export default function App() {
  const location = useLocation();
  const state = useContext(Cart2);

  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Product2 />} />
        <Route path="/detail/:id" exact element={<DetailProduct />} />
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
        <Route
          path="/register"
          element={isLogged ? <Register /> : <NotFound />}
        />
        <Route
          path="/history"
          element={isLogged ? <OrderHistory /> : <NotFound />}
        />
        <Route
          path="/history/:id"
          element={isLogged ? <OrderDetails /> : <NotFound />}
        />
        <Route path="/cart2" element={<Cart3 />} />
        <Route path="*" exact element={<NotFound />} />
        <Route
          path="/category"
          exact
          element={isAdmin ? <Categories /> : <NotFound />}
        />
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
