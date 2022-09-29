import React from 'react'

import Navbar from './components/navbar/Navbar'
import Claim from './containers/claim/Claim'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Tecnologies from './containers/tecnologies/Tecnologies';

import Reveal from 'react-reveal/Reveal';
import SnowBg from './components/snowBg/SnowBg';
import About from './containers/about/About';
import Experience from './containers/experience/Experience';

import Footer from './containers/footer/Footer';


function App() {

  return (
    <div>
      <div>     
        <SnowBg></SnowBg>   
        <Navbar></Navbar>
        <Reveal>          
          <Claim></Claim>
          <Tecnologies></Tecnologies>
          <About></About>
          <Experience></Experience>
        </Reveal>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
