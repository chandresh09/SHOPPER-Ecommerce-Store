import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png';
import cart from './Assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <>
    <div className='navbar'>
        <div className="nav-logo" onClick={()=> {setMenu("shop")}}><Link to='/'><img src={logo} alt="Logo" />
            <p>SHOPPER</p></Link></div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr className='line' />:<></>}</li>
            <li onClick={()=> {setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr className='line' />:<></>}</li>
            <li onClick={()=> {setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr className='line' />:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr className='line' />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt="Cart Icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
    </>
  )
}

export default Navbar