import React from 'react'
import './tecnologies.css'
import ExImg from '../../assets/php.png'
import Cta from '../../components/cta/Cta'

const Tecnologies = () => {
  return (
    <div id='tecnologiesSection' className='container'>
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
    </div>
  )
}

export default Tecnologies