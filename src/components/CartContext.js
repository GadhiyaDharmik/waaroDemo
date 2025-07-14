import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Load user from localStorage once
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userDetail"))?.user;
    if (userData) {
      setUser(userData);
    }
  }, []);

  const addToCart = (userId, dataCategoryId) => {
    setCart((prevCart) => [...prevCart, { userId, dataCategoryId }]);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, user, setUser, logout }}>
      {children}
    </CartContext.Provider>
  );
};
