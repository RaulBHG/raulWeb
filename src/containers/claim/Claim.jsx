import React from 'react'
import './claim.css'
import ImgFollow from './../../components/imgFollow/ImgFollow';

const Claim = () => (
    <div id='mainClaim' className='container'>
      <div className='left'>
        <h1 className='titleWeb'>Raúl Blázquez</h1>
        <p className='subTitleWeb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper lobortis pretium. Sed a turpis laoreet, ultrices magna vel, sagittis tortor. Aliquam mauris turpis, viverra laoreet nisi non, vulputate ultrices tellus. Quisque a dui faucibus, facilisis felis in, finibus mauris. Etiam velit ipsum, egestas ut molestie at, malesuada at tellus. Suspendisse potenti. Vivamus viverra neque eu ex finibus blandit.</p>
      </div>
      <div className='right'>
        <ImgFollow/>        
      </div>
    </div>
  )

export default Claim