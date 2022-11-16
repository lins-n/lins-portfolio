import React from 'react'
import {RiCloseFill} from 'react-icons/ri'; 

import './services.css'
import img2 from '../../Assets/Images/img2.jpg'
import img4 from '../../Assets/Images/img4.png'
import img5 from '../../Assets/Images/img5.png'
import img6 from '../../Assets/Images/img6.png'
import img7 from '../../Assets/Images/img7.png'
import img9 from '../../Assets/Images/img9.png'
import img10 from '../../Assets/Images/img10.png'
import img11 from '../../Assets/Images/img11.jpg'
import img13 from '../../Assets/Images/img13.jpg'
import img18 from '../../Assets/Images/img18.png'
import img19 from '../../Assets/Images/img19.jpg'
import img16 from '../../Assets/Images/img16.jpg'
import img17 from '../../Assets/Images/img17.jpg'
import myth from '../../Assets/Images/myth.jpg'
import img22 from '../../Assets/Images/img22.png'
import img23 from '../../Assets/Images/img23.png'
import img24 from '../../Assets/Images/img24.png'
import img25 from '../../Assets/Images/img25.png'
import fig from '../../Assets/Images/fig.png'
import img27 from '../../Assets/Images/img27.png'
import img28 from '../../Assets/Images/img28.png'
import img29 from '../../Assets/Images/img29.png'
import img30 from '../../Assets/Images/img30.jpg'
import { useState } from 'react'



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
    { id: 29,
      imgSrc: img29, },
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
      { id: 19,
        imgSrc: img22, },
      { id: 20,
        imgSrc: img23, },
      { id: 21,
        imgSrc: img24, },
      { id: 22,
        imgSrc: img25, },
      { id: 28,
        imgSrc: img28, },
      { id: 23,
        imgSrc: fig, },
      { id: 24,
        imgSrc: img27, },
        { id: 25,
          imgSrc: myth, },
      
      { id: 30,
        imgSrc: img30, },
  ]

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }

    
  
  return (  
    <section id='services'>

          <h5> My Projects</h5>
          <h2> Portfolio</h2>

      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc}/>
        <RiCloseFill onClick={() => setModel(false)}/>
      </div>

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='images' key={index} onClick={() => getImg(item.imgSrc)} >
              <img src={item.imgSrc} alt='img'  className='images__width'/>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Services