import React from 'react'
import '../../assets/styles/CardCategorias.css'
import AutoCAD from '../../assets/icons/AutoCAD.svg'

function CardCategories() {
  return (
    <>
      <div class="card">
        <img src={AutoCAD} alt="LOGO" />
        <h3>AtoCAD</h3>
        <p>5 Courses</p>
      </div>
    </>
  )
}

export default CardCategories