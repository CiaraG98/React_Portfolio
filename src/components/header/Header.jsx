import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Ciara Gilsenan</h1>
        <h5 className="text-light">Software Engineer</h5>
        <HeaderSocials/>
        <CTA />
      </div>
    </header>
  )
}

export default Header