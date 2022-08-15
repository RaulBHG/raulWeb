import { useState } from 'react'
import './menuButton.css'

const MenuButton = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`menuButton ${!toggleMenu ? '' : 'open'}`} onClick={() => setToggleMenu(!toggleMenu ? true : false)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuButton