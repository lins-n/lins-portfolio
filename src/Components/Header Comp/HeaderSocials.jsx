import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href='https://www.linkedin.com/in/collins-nudekor-a5144017a/' target="_blank"><BsLinkedin/></a>
       <a href='https://github.com/lins-n' target="_blank"> <BsGithub/></a>
       <a href='https://instagram.com/_lins.xx' target="_blank"><BsInstagram/></a>
    
    </div>
  )
}

export default HeaderSocials 