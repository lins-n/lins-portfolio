import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './reviews.css'
import me2 from '../../Assets/me2.jpg'
import { RiAwardFill } from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const Reviews = () => {

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
    <section id='reviews'>
      <h5> What clients say</h5>
      <h2> Testimonials</h2>

    <div className='container  review'>
      <div className='cards'>
        <div className='outer'>
          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project!
             "</small>
            <h4 className='reviewer'>  Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <div>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
            </div> 
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <div>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
            </div> 
          </div>

      </div>
      <div className='outer'>
          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <div>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
            </div> 
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <div>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
            </div> 
          </div>
          
          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
             "</small>
            <div>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}} > - (Cubix GH)</span></h4>
            </div> 
          </div>

      </div>

      {/* <div className='outer'>
          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

          <div className='card'>
            <small className='card__content'>" Hi! I'm Collins and I'm passionate about design and code. 
            From mobile apps to websites, logos to branding, and everything in between, 
            I enjoy building interfaces for web and mobile. Let's talk about your project! "</small>
            <h4 className='reviewer'> Collins <span style={{fontStyle:'italic'}}> - (Cubix GH)</span></h4>
          </div>

      </div> */}


      </div>

     
    </div>
    </section>
  )
}

export default Reviews