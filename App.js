import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Cart3 from "./ProductGetApi/components/mainpages/Cart/Cart";
import NotFound from "./ProductGetApi/components/utils/not_found/NotFound";
import OrderHistory from "./ProductGetApi/components/history/OrderHistory";
import OrderDetails from "./ProductGetApi/components/history/OrderDetails";
export default function App() {
  const location = useLocation();
  const state = useContext(Cart2);

  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
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
        <Route path="*" exact element={<NotFound />} 
      </Routes>
    </div>
  );
}
