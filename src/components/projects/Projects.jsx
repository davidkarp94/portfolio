import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import './projects.css';
import example from '../../assets/0.jpg';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: example,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
  id: 2,
  image: example,
  title: 'Project Title',
  github: 'https://github.com',
  demo: 'https://github.com'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Some small works</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className='mySwiper'
          >
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <SwiperSlide key={id}>
              <article className='project'>
                <div className="project-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="project-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </section>
  )
}

export default Projects;