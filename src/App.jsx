import React from 'react'

import Navbar from './components/navbar/Navbar'
import Claim from './containers/claim/Claim'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'

function App() {

  return (
    <div>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Claim></Claim>
      </div>
    </div>
  )
}

export default App
