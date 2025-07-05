import React from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // ✅ Use your custom hook!

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const { token } = useAuth(); // ✅ Use `token` from your Auth hook

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!token) {
      alert('⚠️ Please login to place an order.');
      return;
    }

    try {
      for (let item of cartItems) {
        await axios.post(
          'http://localhost:5000/api/orders/place',
          {
            product: item.name,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ Use token here
            },
          }
        );
      }

      alert('✅ Order placed successfully!');
      clearCart();
    } catch (err) {
      console.error('❌ Order failed:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>

      <p><strong>Items:</strong> {cartItems.length}</p>
      <p><strong>Total:</strong> ₹{totalPrice}</p>

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
