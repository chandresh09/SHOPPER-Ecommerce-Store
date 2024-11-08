import React from 'react';
import './Footer.css';
import footerlogo from './Assets/logo_big.png';
import insta_icon from './Assets/instagram_icon.png';
import pintester_icon from './Assets/pintester_icon.png';
import whatsapp_icon from './Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footerlogo} alt="Company logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Comapny</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-links">
            <img src={insta_icon} alt="Instagram Icon" />
            <img src={pintester_icon} alt="Pintester Icon" />
            <img src={whatsapp_icon} alt="Whatsapp Icon" />
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer