import React from 'react'
import './App.css'
import Navbar from './MyComponents/Navbar/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import Product from './Pages/Product.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Hero from './MyComponents/Hero/Hero.jsx'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path=":productId" element={<Product />} />
            <Route path="/mens" element={<ShopCategory category="mens" />} />
            <Route path="/womens" element={<ShopCategory category="womens" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
          </Routes>

          <Hero />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
