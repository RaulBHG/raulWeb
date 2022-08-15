import { useEffect } from 'react'
import './navbar.css'
import MenuButton from '../menuButton/MenuButton';


const Navbar = () => {

  
  useEffect(() => {
    window.addEventListener('scroll', () =>{

      let currentScroll = window.scrollY; // get current position
      if(currentScroll > 50){
        document.getElementsByClassName("LogoTitle")[0].classList.add('left')
      }else{
        document.getElementsByClassName("LogoTitle")[0].classList.remove('left')
      }

    })
  })

  return (
    <div className='mainNavbar container'>      
        <a href='#' className='LogoTitle'>Raúl <br/> BHG</a>
        <div className='menuOptions'>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
        </div>
        <div className='openMenu'>
          <MenuButton></MenuButton>
        </div>
    </div>
  )
}

export default Navbar
