import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp' // Adjust the path as necessary
import cart_icon from '../../assets/cart_icon.png' // Adjust the path as necessary
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" className="h-[50px]" />
                <p>Shopify</p>
            </div>
            
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
                <li onClick={() => {setMenu("home"); setMobileMenu(false)}}>
                    <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                    {menu === "home" ? <hr/> : <></>}
                </li>
                <li onClick={() => {setMenu("men"); setMobileMenu(false)}}>
                    <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
                    {menu === "men" ? <hr/> : <></>}
                </li>
                <li onClick={() => {setMenu("women"); setMobileMenu(false)}}>
                    <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
                    {menu === "women" ? <hr/> : <></>}
                </li>
                <li onClick={() => {setMenu("kids"); setMobileMenu(false)}}>
                    <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
                    {menu === "kids" ? <hr/> : <></>}
                </li>
            </ul>
            
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" className='h-[40px]'/>
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
