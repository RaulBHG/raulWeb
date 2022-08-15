import React from 'react'

import Navbar from './components/navbar/Navbar'
import Claim from './containers/claim/Claim'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Tecnologies from './containers/tecnologies/Tecnologies';

function App() {

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Claim></Claim>
        <Tecnologies></Tecnologies>
      </div>
    </div>
  )
}

export default App
