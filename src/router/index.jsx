import React from 'react';
import { HashRouter, Routes, Navigate, Route } from 'react-router-dom';

import DashboardPage from '../pages/Dashboard';
import RegisterPage from '../pages/Register';

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </HashRouter>
);

export default Router;