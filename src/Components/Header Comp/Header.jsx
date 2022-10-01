import React from 'react'
import './header.css'
import CTA from './CTA'
import { Helmet } from 'react-helmet'

import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    
    <header >
      
      
      <div className="container header__container">
        
        <h4> Hello I'm</h4>
        <h1> Collins Nudekor</h1>
        <h3 style={{color:'#c0392b'}} > Developer | Product Designer</h3>
       
    
    
        {/* <h5 className='text-light'> Graphic Designer and Product Designer </h5> */}


      {/* Buttons */}
        <CTA/>
        <HeaderSocials/>

      {/* Image */}


      {/* <div className='me'>
          <img src={me2} alt="me" />
      </div> */}
      <a href='#contact' className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default Header