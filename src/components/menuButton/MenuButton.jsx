import { useState } from 'react'
import './menuButton.css'

const MenuButton = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuFunc = () => {
    setToggleMenu(!toggleMenu ? true : false)
    document.getElementsByClassName("menuOptions")[0].classList.toggle('open')
  }

  return (
    <div className={`menuButton ${!toggleMenu ? '' : 'open'}`} onClick={toggleMenuFunc}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuButton