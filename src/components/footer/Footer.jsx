import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id='portfolio'>
      <a href="#" className='footer__logo'>David Karp</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#projects">Projects</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; David Karp. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer