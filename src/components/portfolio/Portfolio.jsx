import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/moodLogger.jpg'
import IMG2 from '../../assets/chatbot.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Mood Logger',
    github: 'https://github.com/CiaraG98/MoodLoggerAction',
    demo: 'https://drive.google.com/file/d/1qgcSigmtSGEX6q1AQG4KBZimf0VZPYo9/view?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: "I'm a Celebrity Chatbot",
    github: 'https://github.com/CiaraG98/FYP_Full_Project',
    demo: 'https://github.com/CiaraG98'
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
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
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