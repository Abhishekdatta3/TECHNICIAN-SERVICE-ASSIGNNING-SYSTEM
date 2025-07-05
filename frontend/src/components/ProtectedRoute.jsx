import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ Use your context

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { token, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Checking access...</p>
      </div>
    );
  }

  if (!token) return <Navigate to="/" replace />;

  if (adminOnly && role !== 'admin') {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
