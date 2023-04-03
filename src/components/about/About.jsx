import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>

          </div>
          
          <p>
          FullStack Developer, with 2 years of tertiary learning in the IT ecosystem; looking to pursue opportunities within organizations that can shape and enhance my software development knowledge. Inclined towards initiatives that can provide essential growth and learning environments.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About