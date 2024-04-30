import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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

  const [navbarOpen, setNavbarOpen] = useState(false)
  const showNavBar = () => setNavbarOpen(!navbarOpen);
  return (
    <>
      <header>
        <nav className="nav">
          <div id="menu">
            <i class="fa-solid fa-bars" onClick={showNavBar}></i>
          </div>
          <div>
            Logo
          </div>
          <ul className={navbarOpen ? "header-ul active" : "header-ul"}>
            <div id="close">
              <i class="fa-solid fa-xmark" onClick={showNavBar}></i>
            </div>
            {links.map((link) => (
              <li className="animation" key={link.id}>
                <Link to={link.path} >{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;