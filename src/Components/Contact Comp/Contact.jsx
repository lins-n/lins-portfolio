
import './contact.css'
import me2 from '../../Assets/me2.png'
import { BsMailbox, BsWhatsapp} from 'react-icons/bs'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import { BsInstagram } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yo0hydm', 'template_fs0khn7', form.current, 'Fzfzm9CXt7SHQanAk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get in Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__left">
          
          <article className='contact__details'>
            <div className='socialmedia'>
              <a href='https://api.whatsapp.com/send?=+233203999604' target="_blank"><BsWhatsapp/></a>
              <a href='https://twitter.com/_lins_n' target="_blank"> <BsTwitter/></a>
              <a href='mailto:linscorporate@gmail.com' target="_blank"><HiMail/></a>
            </div>
           
            </article>
         
        </div>

        <div className="contact__right">
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name'  required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>


      </div>
    </section>
  )
}

export default Contact