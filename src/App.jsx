import { useState } from 'react';
import { ProductContext, ProductProvider } from './context/ProductContext';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  
  return (
    <>
      <ProductProvider>
        <div className='App'>
          < NavBar />
          <Home />
        </div>
      </ProductProvider>
    </>
  )
}

export default App
