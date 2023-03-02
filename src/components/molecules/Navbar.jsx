import React from 'react'
import '../../assets/styles/Navbar.css'
import LogoImg from'../../assets/icons/LogoPrin.svg'
import Perfil from '../../assets/icons/Perfil.png'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={LogoImg} alt="Logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Cursos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Maquetas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ayuda</a>
            </li>
          </ul>

          <div className='navbar-perfil'>
            <img src={Perfil} alt="Perfil" />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar