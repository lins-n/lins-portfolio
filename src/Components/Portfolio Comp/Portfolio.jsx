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
import web from '../../Assets/Images/web.png'
import img10 from '../../Assets/Images/img10.png'
import img11 from '../../Assets/Images/img11.jpg'
import linventory from '../../Assets/Images/linventory.png'
import img20 from '../../Assets/Images/img20.jpg'
import img17 from '../../Assets/Images/img17.jpg'
import fig1 from '../../Assets/Images/fig1.png'
import img13 from '../../Assets/Images/img13.jpg'



const Portfolio = () => {

  let data = [
    { id: 1,
     imgSrc: fig1,
     title: 'Bisty Student App', 
     github: '',
     demo: 'https://bit.ly/bitsy-prototype',},
    { id: 2,
     imgSrc: img13,
     title: 'itFits Shoe App', 
     github: 'https://github.com/lins-n/shoe-app',
     demo: '', },
    { id: 3,
      imgSrc: linventory,
      title: 'Linventory App', 
      github: 'https://github.com/lins-n/Linventory-App',
      demo: '', },
    { id: 4,
      imgSrc: web,
      title: 'Portfolio Website', 
      github: 'https://github.com/lins-n/lins-portfolio',
      demo: 'https://collinss.me', },
    { id: 5,
      imgSrc: img20,
      title: 'Muse Music App', 
      github: '',
      demo: '', },
    { id: 6,
      imgSrc: img17,
      title: 'Dryce Laundry App', 
      github: 'https://github.com/Rquaicoo/dryce-mobile-client',
      demo: '', },
    ]

  return (
    <section id='portfolio'>
           <h5> My Projects</h5>
          <h2> Developer Portfolio</h2>
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