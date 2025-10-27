import { useState } from 'react';
import { ProductContext, ProductProvider } from './context/ProductContext';
import { Home } from './pages/Home';
import './App.css';

function App() {
  
  return (
    <>
      <ProductProvider>
        <div className='App'>
          <Home />
        </div>
      </ProductProvider>
    </>
  )
}

export default App
