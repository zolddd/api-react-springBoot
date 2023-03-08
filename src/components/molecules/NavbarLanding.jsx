import React from 'react'
import '../../assets/styles/NavbarLanding.css'
import LogoImg from'../../assets/icons/LogoPrin.svg'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'
import LinkNavbar from '../atoms/LinkNavbar'

function NavbarLanding() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={LogoImg} alt="Logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <LinkNavbar LiClassName="nav-item" AClassName="nav-link" Ref="#" Name="Inicio"/>
            <LinkNavbar LiClassName="nav-item" AClassName="nav-link" Ref="#" Name="Categoria"/>
            <LinkNavbar LiClassName="nav-item" AClassName="nav-link" Ref="#" Name="Cursos"/>
            
          </ul>

          <div className='header-btn-iz'>
            <Link to="/login"><a href="#">Iniciar sesion</a></Link>
            <Button msn="Registrarse" />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default NavbarLanding;