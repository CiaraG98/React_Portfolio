import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/*<div className="footer__socials">
        <a href="https://instagram.com"><GrInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
        <a href="https://facebook.com"><FaFacebookF /></a>
      </div>*/} 

      <div className="footer__copyright">
        <small>&copy; EGATOR All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer