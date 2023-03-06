import React from 'react'
import '../../assets/styles/CardCategoryV2.css'


function CardCategoryV2({categoryA, img}) {
  return (
    <div className="card1" id={categoryA} >
            <div className="icon1"><img src={img}/></div>
            <div className="content1">
                <h2>AutoCAD</h2>
                <p>5 Courses</p>
            </div>
    </div>
  )
}

export default CardCategoryV2