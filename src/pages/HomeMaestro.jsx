import React from 'react'
import MaestroCursos from '../components/organims/MaestroCursos'
import Navbar from '../components/molecules/Navbar'
import FooterText from '../components/atoms/FooterText'

function HomeMaestro() {
  return (
    <div >
        <Navbar/>
        <MaestroCursos />
        <hr />
        <FooterText/>
    </div>
  )
}

export default HomeMaestro