import React from 'react'
import CV from '../../assets/Anudeep_fin.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA