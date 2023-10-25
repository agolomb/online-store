import React, { createContext, useState, useContext } from "react";

const CartContext = createContext(); //The CartContext object lets us share cart data and functions with components that need access to the shopping cart

/* Another component we've created to manage the shopping cart. It take "children" as props that represent items we actually put in the shopping cart.*/
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //the shopping cart object that contains the number of tiems in the shopping cart

  //Three functions we can use to manipulate the number of items in the shopping cart.
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]);
  };
  /*<CartContext.Provider> this part provides the cart data and functions. It allows the cart information to be available
to all parts of the app. */
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// This is a custom hook that other components can use to add items to the displayed shopping cart (CartCount.js)
export const useCart = () => {
  return useContext(CartContext);
};
