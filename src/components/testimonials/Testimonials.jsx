import React from 'react'
import './testimonials.css'
import A1 from '../../assets/me-about.jpg'
import A2 from '../../assets/me-about.jpg'
import A3 from '../../assets/me-about.jpg'
import A4 from '../../assets/me-about.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: A1,
    name: 'Tina Snow',
    review: "In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch! By the end of this video, you will know how to create a react app from scratch."
  },
  {
    avatar: A2,
    name: 'Alannah Henry',
    review: "In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch! By the end of this video, you will know how to create a react app from scratch."
  },
  {
    avatar: A3,
    name: 'Fionnuala Meehan',
    review: "In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch! By the end of this video, you will know how to create a react app from scratch."
  },
  {
    avatar: A4,
    name: 'Kwame Despite',
    review: "In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch! By the end of this video, you will know how to create a react app from scratch."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  ) 
}

export default Testimonials