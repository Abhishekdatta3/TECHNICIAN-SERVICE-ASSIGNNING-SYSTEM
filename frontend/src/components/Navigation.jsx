import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navigation.css';

const Navigation = () => {
  const { token, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🛠️ <span>TechService</span>
      </div>
      {token && (
        <ul className="navbar-links">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/technicians">Technicians</NavLink></li>
          <li><NavLink to="/booking">Book Service</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/store">Store</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>

          {role === 'admin' && (
            <>
              <li><NavLink to="/admin">Admin Dashboard</NavLink></li>
              <li><NavLink to="/admin/orders">Orders</NavLink></li>
              {/* ✅ NEW LINK: Admin Queries */}
              <li><NavLink to="/admin/queries">Contact Queries</NavLink></li>
            </>
          )}

          <li>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
