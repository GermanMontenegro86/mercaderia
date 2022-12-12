import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import "./CardWidget.css";

const CartWidget = () => {
  return (
    <div >
      <h3 className="cart">
        <GiShoppingCart className="carrito" />
        <p className="carrito">20</p>
      </h3>
    </div>
  );
};

export default CartWidget;
