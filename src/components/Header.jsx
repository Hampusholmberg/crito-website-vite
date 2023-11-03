import React, { useEffect, useState } from 'react'
import logotype from '../assets/images/Logotype.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {

  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const toggleMenu = () => {

    if (isActiveMenu) {
      setIsActiveMenu(false)
    } else {
      setIsActiveMenu(true)
    }

    window.scrollTo(0, 0)
  }

  return (
    <header>
      <div className="container">
        <a className="logotype" href="/">
          <img src={logotype} alt="Crito logotype"/>
        </a>
        <div className="menu">
          <div className="top-menu">
            <div className="contact">       
              <p className="first"><i className="fa-solid fa-phone"></i>+46 (8) 121 470 50</p>
              <p><i className="fa-solid fa-envelope"></i>info@crito.com</p>
              <p className="last"><i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</p>
            </div>
            <div className="social-media">
              <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="bottom-menu">
            <div className="navigation-bar">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/Service'>Service</NavLink>
              <NavLink to='/News'>News</NavLink>
              <NavLink to='/Contact'>Contact</NavLink>
            </div>
            <button className="btn-yellow login">
              Login<i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
        <button onClick={toggleMenu} className="menu-phone-toggle">
          <i className="fa-solid fa-bars"/>
        </button>
        {isActiveMenu
          ? (
            <div className='menu-phone'> 
              <button onClick={toggleMenu} className="menu-phone-toggle">
                <i className="fa-solid fa-xmark"/>
              </button>
              <div className='navlinks'>
                <NavLink onClick={toggleMenu} to='/'>Home</NavLink>
                <NavLink onClick={toggleMenu} to='/ervice'>Service</NavLink>
                <NavLink onClick={toggleMenu} to='/News'>News</NavLink>
                <NavLink onClick={toggleMenu} className="last" to='/Contact'>Contact</NavLink>
              </div>
            </div>
          )
          : ""
        }
      </div>
    </header>
  )
}

export default Header