import React from 'react'
import Categorias from '../molecules/Categorias';
import HomeText from '../molecules/HomeText';
import AboutText from '../molecules/AboutText';
import '../../assets/styles/Footer.css'
import '../../assets/styles/CardCategorias.css'
import NavbarLanding from '../molecules/NavbarLanding'
import FooterText from '../molecules/FooterText';
import ShoppinText from '../molecules/ShoppinText';


function LandingPage() {
  return (
    <div>
      <NavbarLanding/>
      <section className="home1" id="home">
        <HomeText />
	    </section>

      <section className='container-card1' id='categories'>
        <Categorias />
		  </section>

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