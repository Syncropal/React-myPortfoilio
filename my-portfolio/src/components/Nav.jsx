import {useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className='nav-container'>
        <a href='#home' className='logo'>Tripal Bayalkoti</a>

        <div className='nav-links'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#contactUs'>Contact Us</a>
        </div>
        <div className='nav-utils'>
          <a href='https://github.com/Syncropal' target='_blank' rel='noreferrer'>
            <FaGithub className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/tripal-bayalkoti' target='_blank' rel='noreferrer'>
          <FaLinkedin className='icon' />
          </a>
          <a href='https://www.instagram.com/tripal_ezyy69'>
            <FaInstagram className='icon' />
          </a>
          <button onClick={ () =>
          setDarkMode(!darkMode)}
          className='dark-mode-toggle'>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}