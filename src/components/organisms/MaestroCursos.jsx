import React from 'react'
import CardCourses from '../atoms/CardCourses'
import añadir from '../../assets/icons/Añadir.svg'
import { Link } from 'react-router-dom'

function MaestroCursos() {
  return (
    <>
      <div className='añadir'>
        <img src={añadir} alt="img" />
        <Link to="/registro_cursos"><span><a href="#">Añadir cursos</a></span></Link>
      </div>
      <div className='Conatiner-cards'>
        <CardCourses category="AutoCAD" name="Autodesk AutoCAD para Diseño, Interiorismo y Arquitectura" />
        <CardCourses category="Topografia" name="Principios básicos de la Topografía para un buen nivel "/>
        <CardCourses category="Sketchup" name="SketchUp no sirve solo para modelar en 3D, también es perfecto" />
      </div>
    </>
  )
}

export default MaestroCursos