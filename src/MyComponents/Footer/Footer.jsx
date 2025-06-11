import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.webp'
import insta_icon from '../../assets/instagram.png'
import facebook_icon from '../../assets/facebook.png'
import whatsapp_icon from '../../assets/whatsapp.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img className="h-[40px]" src={logo} alt="Logo" />
            <p>Shopify</p>
        </div>

        <ul className='footer-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li> 
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icon-container"><img src={insta_icon} alt="" /></div>
            <div className="footer-icon-container"><img src={facebook_icon} alt="" /></div>
            <div className="footer-icon-container"><img src={whatsapp_icon} alt="" /></div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>© 2023 Shopify. All rights reserved.</p>
            <p>Designed by <a href="https://www.linkedin.com/in/curiouspranavthorat/">Pranav Thorat</a></p>
        </div>
    </div>
  )
}

export default Footer
