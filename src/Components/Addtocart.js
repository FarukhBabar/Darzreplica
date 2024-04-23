
import React, { useState } from 'react';
import { useCart } from './CartContext';

const Addtocart = () => {
  const { cartItems, clearCart } = useCart();
  const [quantities, setQuantities] = useState({}); 

  const handleClearCart = () => {
    clearCart();
  };

  
  const updateQuantity = (itemId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
  };

  const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);

  const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

  const incQty = (itemId) => {
    updateQuantity(itemId, (quantities[itemId] || 1) + 1);
  };

  const decQty = (itemId) => {
    if (quantities[itemId] && quantities[itemId] >= 2) {
      updateQuantity(itemId, quantities[itemId] - 1);
    }
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <div className=''>
        {cartItems.map((item) => (
          <div className='d-flex ' key={item.id}>
            <img src={item.image} alt={item.name} className='ms-2 rounded-circle' style={{ width: '80px', height: '80px' }} />
            <div>{item.name}</div>
            <div className='ms-5'><h2>Price: ${item.price}</h2></div>
            {/* <div>Quantity: {quantities[item.id] || item.qty}</div> */}
            <div className='ms-5 d-flex'>
              <div className='mt-1 ms-5'> <h5>Quantity:</h5></div>
              <button onClick={() => decQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>-</button>
              <h4 className='ms-2'>{quantities[item.id] || item.qty}</h4>
              <button onClick={() => incQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>+</button>
              <br /><br />
            </div>
          </div>
        ))}
      </div>
      <div className='mt-1 ms-5'><h3>Total Items: {totalItems}</h3></div>
      <div className='mt-1 ms-5'> <h3>Total Amount: ${totalAmount.toFixed(2)}</h3></div>
      <button  className='btn btn-dark in btn-md ms-2 ' onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Addtocart;
