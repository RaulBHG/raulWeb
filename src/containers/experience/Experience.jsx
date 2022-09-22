import React from 'react'
import './experience.css'
import { ExperienceList } from '../../components/experienceList/ExperienceList';

const listOfExperience = [
  {
    img: "php.png",
    title: "Neodes",
    subtitle: "2019 - 2022",
    info: "Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit. <br> Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit."
  },
  {
    img: "php.png",
    title: "Neodes",
    subtitle: "2019 - 2022",
    info: "Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit. <br> Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit."
  },
  {
    img: "php.png",
    title: "Neodes",
    subtitle: "2019 - 2022",
    info: "Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit. <br> Web realizada con react, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit."
  },
]

const Experience = () => {
  return (
    <div id='experienceSection'>
      <div className='container'>
        <h2>Experiencia</h2>
        <div className='cardSection'>
          <ExperienceList experiences={listOfExperience}/>
          {/* <Cta
            img='php' 
            title='php' 
            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus.'>            
          </Cta>         */}
                         
        </div>                   
    </div>
    </div>
  )
}

export default Experience