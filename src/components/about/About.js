import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BTECH.(Hons) Software Engneering(G) <br /><i>Rajeev Gandhi Memorial College</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>GPA</h5>
                  <small>6.9</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>ReactJs</li>
                      <li>Web Applications</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Software Engineering graduated</b> at the Rajeev Gandhi Memorial College . 
                    I am an enthusiastic and driven individual eager to launch my career through a challenging internship opportunity. My academic foundation is strong, complemented by hands-on experience in Python Full Stack Development, as demonstrated through projects like the GRP HRMS Web Application and SoulThread Social Media Web Application. I possess a solid skillset in Python, Django, JavaScript, React.js, HTML/CSS, and MySQL, along with valuable soft skills such as collaboration and critical thinking. I am a quick learner, passionate about contributing to innovative projects, and dedicated to continuous growth under the guidance of experienced professionals in the software engineering industry. I am confident in my ability to quickly adapt and contribute meaningfully to your team.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About