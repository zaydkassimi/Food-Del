import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {


const [menu,setMenu] = useState("Home")


  return (
    <div className='navbar'>
    <img src={assets.logo} alt="" width={30} className="logo" />
    <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
      <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</a>
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
