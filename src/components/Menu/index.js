import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu () {
  return (
    <div>
      <nav className='Menu'>
        <a className='Logo' href='/'><img className='Logo' src={Logo} alt='Andreflix logo' /></a>
      </nav>
      <Button as='a' className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </div>
  )
}

export default Menu
