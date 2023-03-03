import React from 'react'
import Navbar from '../molecules/Navbar'
import CardCourses from '../atoms/CardCourses'
import FooterText from '../atoms/FooterText'
import añadir from '../../assets/icons/Añadir.svg'
import { Link } from 'react-router-dom'

function MaestroCursos() {
  return (
    <div className='holacomo'>
      <Navbar />
      <div className='añadir'>
        <img src={añadir} alt="img" />
        <Link to="/register-courses"><span><a href="#">Añadir cursos</a></span></Link>
      </div>
      <section className='home2'>
        <CardCourses category="AutoCAD" name="Autodesk AutoCAD para Diseño, Interiorismo y Arquitectura" />
        <CardCourses category="Topografia" name="Principios básicos de la Topografía para un buen nivel "/>
        <CardCourses category="Sketchup" name="SketchUp no sirve solo para modelar en 3D, también es perfecto" />
      </section>
      <hr />
      <FooterText />
    </div>
  )
}

export default MaestroCursos