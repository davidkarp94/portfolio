import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/david-karp-a75624225/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/davidkarp94" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials