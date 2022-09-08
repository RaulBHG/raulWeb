import React from 'react'
import './about.css'

import linkedin from '../../assets/linkedin.png'
import mailIcon from '../../assets/mail.png'
import raulFace from '../../assets/raulFace.jpg'

const About = () => {
  return (
    <div id='aboutSection'>
      <div className='container'>
        <div className='left'>
          <h2>Sobre<br/>mi</h2>
          <img className='userImg' src={raulFace}/>
          <p className='subTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium.</p>
          <div className='socialMediaIcons'>
            <a href='https://www.linkedin.com/in/ra%C3%BAl-bl%C3%A1zquez-hern%C3%A1n-g%C3%B3mez/' target='_blank'>
              <img src={linkedin}/>
            </a>
            <a href='mailto: raulblazquezhernangomez@gmail.com'>
              <img src={mailIcon}/>
            </a>
            <div className='contactInfo'>
              <a href='mailto: raulblazquezhernangomez@gmail.com'>
                raulblazquezhernangomez@gmail
              </a>
              <a href='tel: 606027138'>
                606 027 138
              </a>
            </div>
          </div>          
        </div>
        <div className='right'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About