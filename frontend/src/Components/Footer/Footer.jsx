import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/logo_big.png'
import instagram_icon from '../Assest/instagram_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'
import pintester_icon from '../Assest/pintester_icon.png'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="logo" />
            <p>SHOPPER</p>
        </div>

        <ul className="footer_links">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer_social_icon">
            <div className="footer_icon_container">
                <img src={instagram_icon} alt="Instagram" />
            </div>

            <div className="footer_icon_container">
                <img src={pintester_icon} alt="Instagram" />
            </div>

            <div className="footer_icon_container">
                <img src={whatsapp_icon} alt="Instagram" />
            </div>
      
        </div>
        <div className="footer_copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved </p>
        </div>
    </div>
  )
}
