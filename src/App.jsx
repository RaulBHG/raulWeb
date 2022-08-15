import React from 'react'

import Navbar from './components/navbar/Navbar'
import Claim from './containers/claim/Claim'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Tecnologies from './containers/tecnologies/Tecnologies';

import Reveal from 'react-reveal/Reveal';


function App() {

  return (
    <div>
      <div>
        <Reveal>
          <Navbar></Navbar>
          <Claim></Claim>
          <Tecnologies></Tecnologies>
        </Reveal>
      </div>
    </div>
  )
}

export default App
