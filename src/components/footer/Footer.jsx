import React from 'react'
import './footer.css'
import {BsTwitter, BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import {SiKofi} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">MystoriArt</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonial">Fanart</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://twitter.com/ToriTooMuch"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/jerald-young-232aa720a/"><BsLinkedin/></a>
        <a href="ko-fi.com/mystoriart"><SiKofi/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jerald Young Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer