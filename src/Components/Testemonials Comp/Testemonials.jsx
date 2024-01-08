import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './testemonials.css'
import me2 from '../../Assets/me2.jpg'
import { RiAwardFill } from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const Testemonials = () => {

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
    <section id='testemonials'>
      <h5> Get To know Me</h5>
      <h2> About Me</h2>

      

      <div className="cards">
      <div className="outer">
        <div className="card" style="--delay: -1;">
          <div className="header">
            <div className="profile">
              {/* <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </div> */}
              <div className="details">
                <h4>Francis Goodman</h4>
                <p>zod@zud.kp</p>
              </div>
            </div>
            {/* <div className="stars">
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
            </div> */}
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div className="card" style="--delay: 0;">
          <div className="header">
            <div className="profile">
              {/* <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </div> */}
              <div className="details">
                <h4>Dorothy Padilla</h4>
                <p>ahbo@urimezeze.sa</p>
              </div>
            </div>
            {/* <div className="stars">
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
            </div> */}
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div className="card" style="--delay: 1;">
          <div className="header">
            <div className="profile">
              {/* <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </div> */}
              <div className="details">
                <h4>Devin Davis</h4>
                <p>se@esuruebo.kw</p>
              </div>
            </div>
            {/* <div className="stars">
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
            </div> */}
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div className="card" style="--delay: 2;">
          <div className="header">
            <div className="profile">
              {/* <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </div> */}
              <div className="details">
                <h4>Charles Maxwell</h4>
                <p>rola@zog.ee</p>
              </div>
            </div>
            {/* <div className="stars">
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
            </div> */}
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
        <div className="card" style="--delay: 2;">
          <div className="header">
            <div className="profile">
              {/* <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </div> */}
              <div className="details">
                <h4>Jeffrey Gray</h4>
                <p>hopmurpo@ruwkas.pg</p>
              </div>
            </div>
            {/* <div className="stars">
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
              <span className="op-star"></span>
            </div> */}
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              rem cumque dicta consequatur quisquam tempore suscipit
              perspiciatis sit?
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Testemonials