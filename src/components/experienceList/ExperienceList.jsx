import React from 'react'
import CtaExp from './../ctaExp/CtaExp';
import './experienceList.css'

export const ExperienceList = ({ experiences }) => {
  return (
    <div className='experienceList'>
      {
        experiences.map((experience) => {
          return <CtaExp img={experience.img} title={experience.title} subtitle={experience.subtitle}>{experience.info}</CtaExp>
        })
      }      
    </div>
  )
}
