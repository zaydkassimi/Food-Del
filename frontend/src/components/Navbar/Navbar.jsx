import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {


const [menu,setMenu] = useState("menu");

  const {getTotalCartAmount} =useContext(StoreContext);


  return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt="" width={30} className="logo" /></Link>
    <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
      <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</a>
    </ul>
    <div className="navbar-right">
      <img src={assets.search} alt="" width={30} />
      <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket} alt="" width={30} /></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
