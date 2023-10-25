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

/*This component is the shopping cart that is displayed on the NavBar. {cart.length} is the state object that display the number of items in the {cart} object. */
