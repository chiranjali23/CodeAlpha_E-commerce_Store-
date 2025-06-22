import React, { useState } from 'react'
import '../NavBar/NavBar.css'
import logo from '../../Components/Assest/logo.png'
import cart_icon from '../../Components/Assest/cart_icon.png'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menu,setmenu] = useState("");
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>

      <ul className='navbar_menu'>
        <li onClick={()=>{setmenu("shop")}}><Link to ='/'>shop</Link>shop{menu === "shop"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("Menu")}}><Link to ='/mens'>Menu</Link>{menu === "Menu"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("Women")}}><Link to ='/Womens'>Women</Link>{menu === "Women"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("Kids")}}><Link to ='/Kids'> Kids</Link>{menu === "Kids"?<hr/>:null}</li>
      </ul>

      <div className='nav_login_cart'>
        <button>Login</button>
        <img src={cart_icon} alt=''/>
        <div className='add_cart_counter'>0</div>
      </div>

        
    </div>
  )
}
