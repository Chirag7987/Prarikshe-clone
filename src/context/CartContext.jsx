import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    // Check if course already exists in cart
    const existingItem = cartItems.find(item => item.id === course.id);
    if (!existingItem) {
      setCartItems([...cartItems, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
