import React from 'react';
import './portfolio.css';
import vixbook from '../../assets/redsocial.jpg';
import bintt from '../../assets/0.jpg';
import frontendstore from '../../assets/1.jpg';
import blogdecafe from '../../assets/2.jpg';
import festivaldemusica from '../../assets/3.jpg';
import proyectobootstrap from '../../assets/4.jpg';
import ironvix from '../../assets/5.jpg';
import proyectocodoacodo from '../../assets/6.jpg';
import portfolio from '../../assets/portfolio.jpg';

const data = [
  {
    id: 1,
    image: vixbook,
    title: 'Social Media Fullstack Vixbook',
    github: 'https://github.com/davidkarp94/redsocial-fullstack',
    demo: 'https://vixbook.onrender.com'
  },
  {
    id: 2,
    image: bintt,
    title: 'Nft Website (in development)',
    github: 'https://github.com/m-aragona/bintt-nft-ssr-plugin',
    demo: 'https://bintt-nft-ssr-plugin-production.up.railway.app'
  },
  {
    id: 3,
    image: portfolio,
    title: 'My Old Portfolio',
    github: 'https://github.com/davidkarp94/portfolio-old',
    demo: 'https://davidkarp94.github.io/portfolio-old/'
  },
  {
    id: 4,
    image: frontendstore,
    title: 'Front-End Store (Only FrontEnd)',
    github: 'https://frontend-store-dk.netlify.app',
    demo: 'https://frontend-store-dk.netlify.app'
  },
  {
    id: 5,
    image: blogdecafe,
    title: 'BlogDeCafé (Only FrontEnd)',
    github: 'https://blog-cafe-dk.netlify.app',
    demo: 'https://blog-cafe-dk.netlify.app'
  },
  {
    id: 6,
    image: festivaldemusica,
    title: 'Rock & EDM Festival (Only FrontEnd)',
    github: 'https://festival-musica-dk.netlify.app',
    demo: 'https://festival-musica-dk.netlify.app'
  },
  {
    id: 7,
    image: proyectobootstrap,
    title: 'Only Bootstrap Project',
    github: 'https://github.com/davidkarp94/proyecto-bootstrap',
    demo: 'https://proyecto-bootstrap-dk.netlify.app'
  },
  {
    id: 8,
    image: ironvix,
    title: 'IronVix Pre-Launch Page (Only FrontEnd)',
    github: 'https://github.com/davidkarp94',
    demo: 'https://ironvix.com'
  },
  {
    id: 9,
    image: proyectocodoacodo,
    title: 'Codo a Codo 4.0 Project (Only FrontEnd)',
    github: 'https://davidkarp94.github.io/codo-a-codo-tp1/',
    demo: 'https://davidkarp94.github.io/codo-a-codo-tp1/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio