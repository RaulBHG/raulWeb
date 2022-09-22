import React from 'react'
import './ctaExp.css'

const CtaExp = ({ img, title, subtitle, children }) => {
  return (
    <div className='cardExp'>
      <img src={`${window.location.pathname}src/assets/${img}`}/>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default CtaExp