import React from 'react'
import './portfolio.css'
import img1 from '../../Assets/Images/img1.jpg'
import img2 from '../../Assets/Images/img2.jpg'
import img3 from '../../Assets/Images/img3.jpg'
import img4 from '../../Assets/Images/img4.png'
import img5 from '../../Assets/Images/img5.png'
import img6 from '../../Assets/Images/img6.png'
import img7 from '../../Assets/Images/img7.png'
import img8 from '../../Assets/Images/img8.png'
import img9 from '../../Assets/Images/img9.png'
import img10 from '../../Assets/Images/img10.png'
import img11 from '../../Assets/Images/img11.jpg'
import img21 from '../../Assets/Images/img21.jpg'
import img20 from '../../Assets/Images/img20.jpg'
import img17 from '../../Assets/Images/img17.jpg'
import img15 from '../../Assets/Images/img15.jpg'
import img19 from '../../Assets/Images/img19.jpg'



const Portfolio = () => {

  let data = [
    { id: 1,
     imgSrc: img15,
     title: 'Branding', 
     github: 'https://github.com',
     demo: 'https://dribble.com',},
    { id: 2,
     imgSrc: img19,
     title: 'Ui/UX Design', 
     github: 'https://github.com',
     demo: 'https://dribble.com', },
    { id: 3,
      imgSrc: img21,
      title: 'Logo Design', 
      github: 'https://github.com',
      demo: 'https://dribble.com', },
    { id: 4,
      imgSrc: img9,
      title: 'Product Design', 
      github: 'https://github.com',
      demo: 'https://dribble.com', },
    { id: 5,
      imgSrc: img20,
      title: 'Branding', 
      github: 'https://github.com',
      demo: 'https://dribble.com', },
    { id: 6,
      imgSrc: img17,
      title: 'Startups', 
      github: 'https://github.com',
      demo: 'https://dribble.com', },
    ]

  return (
    <section id='portfolio'>
           <h5> My Projects</h5>
          <h2> Portfolio</h2>
          <div className=' container portfolio__container'>

            {
              data.map(({id, imgSrc, title, github, demo}) => {
                return (
                  <article  key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={imgSrc} alt={title} />
                    </div>
                      <h3>{title}</h3>
                      <div className='portfolio__item-cta'>
                        <a href={github} className='btn' target='_blank' >Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                      </div>
                  </article>
                )
              })
            }

    




          </div>
    </section>
  )
}

export default Portfolio