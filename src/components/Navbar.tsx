import React, { useState } from 'react'
import './Navbar.css';
import logo from '../assets/Evara.png'
const Navbar = () => {
  const[current , setCurrent] = useState("home");
  return (
    <div className='navbar'>
        <img src={logo}/> 
        <div className="navbar-search"><input type="text" placeholder='Search' /><i className="fa-solid fa-magnifying-glass fa-lg" stylesheet="color: #000000;"></i></div> 
        <ul className="navbar-menu">
            <li onClick={()=>setCurrent('home')} className={current==='home'? "active":""}>Home</li >
            <li onClick={()=>setCurrent('bestsellers')} className={current==='bestsellers'? "active":""}>Bestsellers</li >
            <li onClick={()=>setCurrent('clothing')} className={current==='clothing'? "active":""}>Clothing</li >
            <li onClick={()=>setCurrent('contact us')} className={current==='contact us'? "active":""}>Contact us</li>
            <div className="navbar-right">
          <button>Sign in</button>
        <i className="fa-solid fa-cart-shopping fa-lg" stylesheet="color: #000000;"></i>
        </div>
        </ul>
        
    </div>
  );
};

export default Navbar
