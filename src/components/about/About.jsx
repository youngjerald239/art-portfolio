import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.png'
import ME2 from '../../assets/me3.png'
import {GiAchievement} from 'react-icons/gi'
import {FaHtml5} from 'react-icons/fa'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineSecurityUpdateWarning, MdDraw} from 'react-icons/md'
import {SiJavascript, SiCsswizardry} from 'react-icons/si'
import {BsFillCollectionPlayFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <h2>Meet the Artist</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me2-image">
            <img src={ME2} alt="about-me2"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiAchievement className='about_icon'/>
              <h5>Experience</h5>
              <small>Sketching<RiCustomerService2Fill/>Torso drawings<MdOutlineSecurityUpdateWarning/>Full body</small>
            </article>
            <article className='about_card'>
              <MdDraw className='about_icon'/>
              <h5>DigitalArt Tools</h5>
              <small><FaHtml5/>tablet<SiJavascript/>Waco pad<SiCsswizardry/>Stylus</small>
            </article>
            <article className='about_card'>
              <BsFillCollectionPlayFill className='about_icon'/>
              <h5>Timelaps</h5>
              <small>Timelaps videos of original and fanart</small>
            </article>
          </div>
          <div className="about_me-image">
            <img src={ME} alt="about-me"/>
          </div>
            <p>
              Hello, my name is MystoriArt. I am a digital artist, and self taught. 
              Cat person, Gamer, and a love for animation.
              Having hobbies that delve into many different subjects, I am able to view and work on many different styles of art.
              Take a moment to view my artwork, and please let me know what you think. Leave a friendly comment, or donate to my Koffi.

            </p>

            <a href="#contact">Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About