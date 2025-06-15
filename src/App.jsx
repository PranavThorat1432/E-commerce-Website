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
import Footer from './MyComponents/Footer/Footer.jsx'; // Uncomment if you want to use Footer component
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import ShopContextProvider from './Context/ShopContext.jsx'
import { ToastProvider } from './Context/ToastContext'

function App() {
  

  return (
    <>
      <ShopContextProvider>
        <ToastProvider>
          <div>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
                <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
                <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
              </Routes>

              <Footer />

            </BrowserRouter>
          </div>
        </ToastProvider>
      </ShopContextProvider>
    </>
  )
}

export default App
