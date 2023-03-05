import React from 'react'
import '../../assets/styles/CardStudents.css'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'

function CardStudents({categoryCouse, nameM, title, paragraph}) {
  return (
    <>
        <div className="rowV2" >
            <div>
                <div className="row_title" id={categoryCouse}>
                    <Title level='h1' text={title} />
                </div>
    
                <div className="paragraph">
                    <Paragraph paragraph={paragraph} />
                </div>
            </div>
           

            <div className="row_down">
                <div className="content-down">
                    <Title level='h4' text='Maestro' />
                    <Title level='h2' text={nameM} />
                </div>

                <div className="habilidades">
                    <Title level='h2' text='100%' />
                    <div className="barra">
                        <div className="progreso" id={categoryCouse}></div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default CardStudents