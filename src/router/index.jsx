import React from 'react';
import { HashRouter, Routes, Navigate, Route } from 'react-router-dom';

import DashboardPage from '../pages/Dashboard';

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </HashRouter>
);

export default Router;