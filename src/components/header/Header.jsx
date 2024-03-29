import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/aboutme.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Karp</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="" />
        </div>

        <a className='scroll__down' href="#contact">Scroll Down</a>
      </div>

    </header>
  )
}

export default Header