import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../assests/logo.png";
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';

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
      <header className={navbarColor ? "navbar-color" : "navbar-transparent"}>
        <nav className="nav">
          <div>
            <img src={Logo} alt="logo" className='logo' />
          </div>
          <div id="menu" onClick={showNavBar}>
            <CgMenuRight />

          </div>

          <ul className={navbarOpen ? "header-ul active" : "header-ul"}>
            <div id="close" onClick={showNavBar}>
              <IoClose />
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