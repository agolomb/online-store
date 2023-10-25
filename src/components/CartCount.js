import React from "react";
import { useCart } from "./CartContext";
import { ShoppingCart } from "react-feather";

function CartCount() {
  const { cart } = useCart();
  return (
    <div className="cart-count bg-blue-500 text-white font-semibold px-2 py-1 rounded-full flex items-center">
      <ShoppingCart size={24} />
      <span className="text-gray-900 ml-1">{cart.length}</span>
    </div>
  );
}
export default CartCount;
