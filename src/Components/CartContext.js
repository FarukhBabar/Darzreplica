
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const clearCart = () => {
    setCartItems([]); // Set cartItems to an empty array to clear the cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);





// CartContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item, quantity) => {
   
//     const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

//     if (existingItemIndex !== -1) {
     
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCartItems);
//     } else {
     
//       setCartItems([...cartItems, { ...item, quantity }]);
//     }
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
