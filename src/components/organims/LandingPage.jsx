import React from 'react'
import Categorias from '../molecules/Categorias';
import HomeText from '../molecules/HomeText';
import AboutText from '../atoms/AboutText';
import '../../assets/styles/Footer.css'
import '../../assets/styles/CardCategorias.css'
import NavbarLanding from '../molecules/NavbarLanding'
import FooterText from '../atoms/FooterText';
import ShoppinText from '../atoms/ShoppinText';


function LandingPage() {
  return (
    <div>
      <div className='LandingNa'  >
        <NavbarLanding/>
      </div>
      <HomeText />
      
      <Categorias  />

      <section className='courses ' id='courses'>
        <ShoppinText/>
      </section>


      <section className="about" id="about">
        <AboutText/>
	    </section>

      <hr />
      <FooterText />
    </div>
  )
}

export default LandingPage