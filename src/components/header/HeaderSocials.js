// HeaderSocials.js
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials" role="group"> {/* Keep role="group" if you added it */}
      <a href="https://www.linkedin.com/in/anudeep-reverent-97a95n90b/" target="_blank" rel='noreferrer' aria-label="LinkedIn"> {/* Added aria-label as fallback*/}
        <BsLinkedin/><span className="visually-hidden">LinkedIn</span>{/* Added visually hidden text */}
      </a>
      <a href="https://github.com/anurevs9" target="_blank" rel='noreferrer' aria-label="GitHub"> {/* Added aria-label as fallback*/}
        <BsGithub/><span className="visually-hidden">GitHub</span>{/* Added visually hidden text */}
      </a>
    </div>
  )
}

export default HeaderSocials