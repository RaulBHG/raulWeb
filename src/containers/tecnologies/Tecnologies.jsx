import React from 'react'
import './tecnologies.css'
import Cta from '../../components/cta/Cta'
import { SkillList } from './../../components/skillsList/SkillList';

const listOfSkills = [
  { bg_color: "#F22B1E", name: "Laravel" },
  { bg_color: "#E74B27", name: "Git" },
  { bg_color: "#41C6F0", name: "Flutter" },
  { bg_color: "#F23600", name: "Codeigniter" },
  { bg_color: "#F2D400", name: "JavaScript" },
  { bg_color: "#E66E00", name: "Java" },
]

const Tecnologies = () => {
  return (
    <div id='tecnologiesSection'>
      <div className='container'>
        <h2>Tecnologías</h2>
        <div className='cardSection'>
          <Cta 
            img='php' 
            title='php' 
            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.'>            
          </Cta>        
          <Cta 
            img='php' 
            title='php' 
            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.'>            
          </Cta>
          <Cta 
            img='php' 
            title='php' 
            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.'>            
          </Cta>                  
        </div>   
        <p>Competencias:</p><br/>
        <SkillList skills={listOfSkills}/>
    </div>
    </div>
  )
}

export default Tecnologies