import React from 'react'
import './cta.css'

const Cta = ({ title, info, img }) => {
  return (
    <div className='card'>
      <div className='imgCard'>
        <img src={`${window.location}src/assets/${img}.png`}/>
      </div>
      <div className='infoPart'>
        <h3 className='title'>{title}</h3>
        <p className='info'>{info}</p>
      </div>
    </div>
  )
}

export default Cta