import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders/admin/all');
      setOrders(res.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">🛒 Store Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Customer Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{order.customerName}</td>
                <td className="p-2 border">{order.customerEmail}</td>
                <td className="p-2 border">{order.product}</td>
                <td className="p-2 border">{order.quantity}</td>
                <td className="p-2 border">₹{order.totalPrice}</td>
                <td className="p-2 border capitalize">{order.status}</td>
                <td className="p-2 border">{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrdersPage;
