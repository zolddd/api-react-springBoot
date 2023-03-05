import React from 'react'
// import Title from '../atoms/Title'
import CardStudents from '../molecules/CardStudents'
import Navbar from '../molecules/Navbar'
import FooterText from '../atoms/FooterText'

function StudentCourses() {
  return (
    <>
        <Navbar />
        <div className='container-Students'>
            <div className='texturaCir1'></div>
            <div className='texturaCir2'></div>
            <div className='texturaCir3'></div>
            <CardStudents categoryCouse='AutoCad' title='AutoCAD' paragraph='Autodesk AutoCAD para Diseño, Interiorismo y Arquitectura' nameM='Valeria Dev' />
            <CardStudents categoryCouse='TopografiA' title='Topografia' paragraph='Principios básicos acerca de la medición de terrenos irregulares' nameM='Yahir Dev' />
        </div>
        <hr />
        <FooterText/>
    </>
  )
}

export default StudentCourses