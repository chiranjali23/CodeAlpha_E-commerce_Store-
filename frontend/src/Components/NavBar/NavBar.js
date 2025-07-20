import React, { useState, useContext, useRef } from 'react'; 
import '../NavBar/NavBar.css';
import logo from '../../Components/Assest/logo.png';
import cart_icon from '../../Components/Assest/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopeContext'; 


export default function NavBar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

 

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>

      

      <ul ref={menuRef} className='navbar_menu'>
        <li onClick={() => setMenu("Shop")}>
          <Link to='/'>Shop</Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link to='/mens'>Men</Link>
          {menu === "Mens" && <hr />}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link to='/womens'>Women</Link>
          {menu === "Womens" && <hr />}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>

      <div className='nav_login_cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>

        <Link to='/cart' className='cart-icon-link'>
          <img src={cart_icon} alt='cart' />
          <div className='add_cart_counter'>{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
}
