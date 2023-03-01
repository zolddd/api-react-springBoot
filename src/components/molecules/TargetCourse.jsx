import React from 'react'
// import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'
import Paragraph from '../atoms/Paragraph'
// import "../../CSS/StyleTarget.css"
import LogoA from '../../Images/LogoA.svg'
import texture from '../../Images/TexturaTarget.svg'
export default function TargetCourse() {
  return (
    <>
        <div className='Padre-todo'>
            
            <div className='tarjet'>
                <img className='texture' src={texture} alt="" />
                <div className='container-TargetC'>
                    <img src={LogoA} alt="Logo" />
                    <Paragraph paragraph={"Autodesk AtutoCAD para Diseño, Interismo y Arquitectura."}/>
                    <Subtitle subTitle={"AutoCad"}/>
                    <div className='targetButton'>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                </div>
            </div>

        </div>
    </>    
  )
}
