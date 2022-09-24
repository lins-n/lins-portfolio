import React from 'react'
import CV from '../../Assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' > Download CV</a>
        <a href='#contact' className='btn btn-primary'> Let's have a Chat</a>
    </div>
  )
}

export default CTA