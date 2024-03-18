import React from 'react'
import { Skill } from '../subComponents/Skill'
import './skillList.css'

export const SkillList = ({ skills }) => {
  return (
    <div className='skillList'>
      {
        skills.map((skill) => {
          return <Skill bg_color={skill.bg_color}>{skill.name}</Skill>
        })
      }      
    </div>
  )
}
