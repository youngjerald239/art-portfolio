import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.png'
import ME2 from '../../assets/me3.png'
import {GiAchievement, GiGameConsole} from 'react-icons/gi'
import {FaDev, FaLaptopCode, FaHtml5, FaReact} from 'react-icons/fa'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineSecurityUpdateWarning} from 'react-icons/md'
import {FcSupport} from 'react-icons/fc'
import {SiJavascript, SiCsswizardry, SiPython, SiUnrealengine, SiGodotengine} from 'react-icons/si'
import {DiRuby, DiBootstrap, DiUnitySmall} from 'react-icons/di'

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
              <small><RiCustomerService2Fill/><MdOutlineSecurityUpdateWarning/><FaLaptopCode/><FcSupport/></small>
            </article>
            <article className='about_card'>
              <FaDev className='about_icon'/>
              <h5>DevTools</h5>
              <small><FaHtml5/><SiJavascript/><SiCsswizardry/><FaReact/><DiBootstrap/><SiPython/><DiRuby/></small>
            </article>
            <article className='about_card'>
              <GiGameConsole className='about_icon'/>
              <h5>Video Game Developer</h5>
              <small><SiPython/><SiUnrealengine/><SiGodotengine/><DiUnitySmall/></small>
            </article>
          </div>
          <div className="about_me-image">
            <img src={ME} alt="about-me"/>
          </div>
            <p>
              Bringing graphic design and customer service skills into my work as a full-stack developer, 
               I bring a diverse set of skills not many have. Collaborative and analytical,
               I provide a unique perspective and focus on the user in all of my projects.
            </p>

            <a href="#contact">Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About