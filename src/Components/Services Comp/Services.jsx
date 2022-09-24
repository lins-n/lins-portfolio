import React from 'react'
import './services.css'
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
import img12 from '../../Assets/Images/img12.jpg'
import img13 from '../../Assets/Images/img13.jpg'
import img18 from '../../Assets/Images/img18.png'
import img19 from '../../Assets/Images/img19.jpg'
import img16 from '../../Assets/Images/img16.jpg'
import img17 from '../../Assets/Images/img17.jpg'


const Services = () => {

  let data = [
    { id: 1,
     imgSrc: img17, },
    { id: 2,
     imgSrc: img13, },
    { id: 3,
      imgSrc: img2, },
    { id: 4,
      imgSrc: img4, },
    { id: 5,
      imgSrc: img5, },
    { id: 6,
      imgSrc: img6, },
    { id: 7,
      imgSrc: img7, },
    { id: 8,
      imgSrc: img19, },
    { id: 9,
      imgSrc: img9, },
    { id: 10,
      imgSrc: img10, },
    { id: 11,
      imgSrc: img11, },
    { id: 16,
      imgSrc: img16, },
    { id: 18,
      imgSrc: img18, },
  ]
    
  
  return (
    <section id='services'>

          <h5> My Projects</h5>
          <h2> Portfolio</h2>

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='images' key={index}  >
              <img src={item.imgSrc} alt='img'  className='images__width'/>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Services