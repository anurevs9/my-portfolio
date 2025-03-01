// Nav.js
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''} aria-label="Home"> {/* Removed text from here, added aria-label as fallback*/}
        <AiOutlineHome/> <span className="visually-hidden">Home</span> {/* Added visually hidden text */}
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} aria-label="About"> {/* Removed text from here, added aria-label as fallback*/}
        <BiUser/><span className="visually-hidden">About</span>{/* Added visually hidden text */}
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''} aria-label="Experience"> {/* Removed text from here, added aria-label as fallback*/}
        <FaLaptopCode/><span className="visually-hidden">Experience</span>{/* Added visually hidden text */}
      </a>
      <a href="#myprojects" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active': ''} aria-label="My Projects"> {/* Removed text from here, added aria-label as fallback*/}
        <GoChecklist/><span className="visually-hidden">My Projects</span>{/* Added visually hidden text */}
      </a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''} aria-label="Contacts"> {/* Removed text from here, added aria-label as fallback*/}
        <BiMessageSquareDetail/><span className="visually-hidden">Contacts</span>{/* Added visually hidden text */}
      </a>
    </nav>
  )
}

export default Nav;