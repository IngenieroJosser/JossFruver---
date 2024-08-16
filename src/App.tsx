// Enrutadores --- Rutas de navegación
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './modules/HomePage';
import ShoppingCart from './modules/ShoppingCart';
import NotFoundPage from './modules/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
