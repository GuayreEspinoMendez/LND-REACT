import React, { useState } from 'react';
import "./Header.css"

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/images/descarga.png" alt="logo"/>
      </div>
      <div onClick={toggleMenu} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <nav>
          <div className="logo">
            <img src="/images/logo2.png" alt="logo"/>
          </div>
          <ul>
            <li>
              <a href="Home" className="active">Home</a>
            </li>
            <li>
              <a href="Feature">Products</a>
            </li>
            <li>
              <a href="Feature">Feature</a>
            </li>
            <li>
              <a href="Conditions">About</a>
            </li>
            <li>
              <a href="Cookies">Contact</a>
            </li>
            <li>
              <a href="Cart"><img src="/images/cesta.png" alt="cart"/></a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header;
