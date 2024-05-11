import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../assests/logo.png"

const links = [
  {
    id: 1,
    path: '#home',
    text: 'Home'
  },
  {
    id: 2,
    path: '#about',
    text: 'About'
  },
  {
    id: 3,
    path: '#services',
    text: 'Our Services'
  },
  {
    id: 4,
    path: '#contact',
    text: 'Contact Us'
  }
];

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const showNavBar = () => setNavbarOpen(!navbarOpen);

  const changeBackground = () => {
    if (window.scrollY >= window.innerHeight) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header className={navbarColor? "navbar-color" : "navbar-transparent"}>
        <nav className="nav">
          <div id="menu">
            <i class="fa-solid fa-bars" onClick={showNavBar}></i>
          </div>
          <div>
            <img src={Logo} alt="logo" className='logo' />
          </div>
          <ul className={navbarOpen ? "header-ul active" : "header-ul"}>
            <div id="close">
              <i class="fa-solid fa-xmark" onClick={showNavBar}></i>
            </div>
            {links.map((link) => (
              <li className="animation" key={link.id}>
                <Link to={link.path} exact smooth>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;