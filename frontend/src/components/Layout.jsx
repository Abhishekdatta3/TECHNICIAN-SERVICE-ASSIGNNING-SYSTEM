// src/components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation'; // ✅ Top navbar
import Footer from './Footer';         // ✅ Your new footer

const Layout = () => (
  <>
    <Navigation /> 
    <main style={{ marginTop: '80px', minHeight: '80vh' }}>
      <Outlet />
    </main>
    <Footer /> {/* ✅ Footer always shown under protected pages */}
  </>
);

export default Layout;
