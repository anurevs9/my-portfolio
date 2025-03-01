import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.png'
import IMG2 from '../../assets/img2.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>GRP HRMS Web Application</h3>
            <small className='text-light'>HTML | CSS | Bootstrap | JavaScript | Django | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anurevs9/GRP_HRM-Project.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://anurevsx99.pythonanywhere.com/login-register/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>SoulThread Social Media Web Application</h3>
            <small className='text-light'>HTML | CSS | Bootstrap | JavaScript | Django | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anurevs9/soulthread.git" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://saideepu99.pythonanywhere.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects