import React from 'react'
import '../../assets/styles/CardCourses.css'
import texture from '../../assets/icons/textura.svg'


function CardCourses({category, name}) {
  return (
    <div>
        
        <div className="row_courses" id={category}>
            <div className='textura'>
                <img className='textura1' src={texture} alt="" />
            </div>
            <div className='Logo'>
                {/* <img src={logo} /> */}
            </div>


            <div className='Paragraph'>
                <p>{name}</p>
            </div>

            <div className='title'>
                <h1>{category}</h1>
            </div>

            <div className='btn-row'>
                <button>Editar</button>
                <button>Borrar</button>
            </div>
        </div>
    </div>
  )
}

export default CardCourses