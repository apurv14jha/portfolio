import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Home />} />
          <Route path="admin/*" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
