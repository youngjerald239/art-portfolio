import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {SiKofi} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jerald-young-232aa720a/" target="blank"><BsLinkedin/></a>
        <a href="ko-fi.com/mystoriart" target="blank"><SiKofi/></a>
        <a href="https://twitter.com/ToriTooMuch" target="blank"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials