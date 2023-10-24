import React from "react";
import { useCart } from "./CartContext"; // Adjust the import path as needed

function CartCount() {
  // Use the useCart hook to access the cart data
  const { cart } = useCart();

  return (
    <div className="cart-count bg-blue-500 text-white font-semibold px-2 py-1 rounded-full">
      <span>My Cart Count: {cart.length}</span>
    </div>
  );
}
export default CartCount;
