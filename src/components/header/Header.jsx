import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me4.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello! My Name Is</h5>
          <h1>MystoriArt</h1>
          <h5 className="text-light">Digital Artist</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header