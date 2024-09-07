import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {


const [menu,setMenu] = useState("Home")


  return (
    <div className='navbar'>
    <img src={assets.logo} alt="" width={30} className="logo" />
    <ul className="navbar-menu">
      <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
      <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
      <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
      <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</li>
    </ul>
    <div className="navbar-right">
      <img src={assets.search} alt="" width={30} />
      <div className="navbar-search-icon">
        <img src={assets.basket} alt="" width={30} />
        <div className="dot">
        </div>
        <button>Sign In</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
