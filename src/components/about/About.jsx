import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpg'
import {FaAward} from 'react-icons/fa'
import {GiGraduateCap} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className='about__icon'/>
              <h5>M.Sc. with Distinction</h5>
              <small>Computer Science - Intelligent Systems</small>
            </article>

            <article className="about__card">
              <GiGraduateCap className='about__icon'/>
              <h5>B.A. First Class Honors</h5>
              <small>Computer Science, Linguistics and German</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Summer Internships</small>
            </article>
          </div>

          <p>
          In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch! By the end of this video, you will know how to create a react app from scratch.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About