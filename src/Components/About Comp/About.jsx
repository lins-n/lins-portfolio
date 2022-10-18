import React from 'react'
import './about.css'
import me from '../../Assets/me.jpg'
import me2 from '../../Assets/me2.jpg'
import { RiAwardFill } from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5> Get To know Me</h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me2} alt="me" />
          </div>
        </div>

      <div className='about__content'>
        <div className="about__cards">
         {/* Cards for Articles */}
          <article className='about__card'>
            <RiAwardFill className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ years</small>
          </article>

          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>50+ Clients</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Projects</small>
          </article>

        </div>

        <p className='about__content'>Hi! I'm Collins and I'm passionate about design and code. From mobile apps to websites, logos to branding, and everything in between, I enjoy building interfaces for web and mobile. Let's talk about your project!</p>

        <a href="#contact" className='btn btn-primary'> Let's talk</a>

      </div>


      </div>
    </section>
  )
}

export default About