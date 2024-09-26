import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img className='logoo' src={assets.logo} alt="" />
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
               <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.linkedin} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2> 
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul> 
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2126-9317-6901</li>
                    <li>contact-info@ifood.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © ifood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

