import React, { useContext } from "react";
import BtnRender from "./BtnRender";
import { Cart2 } from "../../../GlobalState";
export default function ProductItem({
  product,
  isAdmin,
  deleteProduct,
  handleCheck,
}) {
  const state = useContext(Cart2);
  const [isLogged] = state.userAPI.isLogged;
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt="" />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      {isLogged ? (
        <BtnRender product={product} deleteProduct={deleteProduct} />
      ) : (
        ""
      )}
    </div>
  );
}
