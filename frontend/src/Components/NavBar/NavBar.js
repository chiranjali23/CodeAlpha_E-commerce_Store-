import React, { useState, useContext } from 'react'; 
import '../NavBar/NavBar.css';
import logo from '../../Components/Assest/logo.png';
import cart_icon from '../../Components/Assest/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopeContext'; 

export default function NavBar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>

      <ul className='navbar_menu'>
        <li onClick={() => setMenu("Shop")}>
          <Link to='/'>Shop</Link>
          {menu === "Shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link to='/mens'>Men</Link>
          {menu === "Mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link to='/womens'>Women</Link>
          {menu === "Womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "Kids" ? <hr /> : null}
        </li>
      </ul>

      <div className='nav_login_cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='add_cart_counter'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
