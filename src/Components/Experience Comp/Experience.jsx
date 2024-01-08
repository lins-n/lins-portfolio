import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  return (
    <section className='exp__style' id='experience'>
      <h5> My skiils</h5>
      <h2> My Experience</h2>
{/*  Frontend */}
   <div className='container experience__container'>
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> CSS</h4>
            <small className='text-light'>INtermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> JAVASCRIPT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> BOOTSTRAP</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> REACT</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> REACT NATIVE</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> JAVA</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4> C#</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>


{/* Product Design */}

        </div>
      </div>
      <div className="experience__backend">
        <h3>Product Design</h3>
        <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> FIGMA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> PHOTOSHOP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> ILLUSTRATOR</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> AFTER EFFECTS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> PREMIERE PRO</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4> ADOBE XD </h4>
              <small className='text-light'>Expeerienced</small>
              </div>
            </article>


          </div>
      </div>

      
   </div>
   









    </section>
  )
}

export default Experience