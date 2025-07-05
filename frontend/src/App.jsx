// App.jsx
import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TechniciansPage from './pages/TechniciansPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPage from './pages/AdminPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import AdminQueriesPage from './pages/AdminQueriesPage';

function App() {
  return (
    <Routes>
      {/* Public route: Signup/Login */}
      <Route path="/" element={<SignupPage />} />

      {/* Protected layout for authenticated users */}
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technicians" element={<TechniciansPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* ✅ Admin Queries Page now protected */}
        <Route
          path="/admin/queries"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminQueriesPage />
            </ProtectedRoute>
          }
        />

        {/* ✅ Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* ✅ Admin Orders Page */}
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminOrdersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Catch all: Redirect to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
