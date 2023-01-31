import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductItemPage from './pages/ProductItemPage';

function App() {
  return (
  <Routes>
      <Route path="/" element={<ProductsPage/>} />
      <Route path="/:name" element={<ProductItemPage/>} />
  </Routes>
  );
}

export default App;
