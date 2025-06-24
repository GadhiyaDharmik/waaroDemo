import { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook to Use Cart
export const useCart = () => useContext(CartContext);

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add Item to Cart
  const addToCart = (userId, dataCategoryId) => {
    setCart((prevCart) => [...prevCart, { userId, dataCategoryId }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
