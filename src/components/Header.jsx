import React from 'react'
import logotype from '../assets/images/Logotype.svg'
import {NavLink} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'


const Header = () => {
  return (
    <header>
    <div className="container">

      <a className="logotype" href="index.html">
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

      <div className="menu-phone">
        <i className="fa-solid fa-bars"></i>
      </div>

    </div>

  </header>
  )
}

export default Header