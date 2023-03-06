import React from 'react'
import '../../assets/styles/CardCategorias.css'
// import CardCategories from '../atoms/CardCategories';
import Title from '../atoms/Title';
import CardCategoryV2 from './CardCategoryV2';
import Autocad from '../../assets/icons/AutoCAD.svg'
import Topografia from '../../assets/icons/TopografiaYellow.svg'

function Categorias() {
  return (
    <div className='container-card2' >
        <div class="center-text">
            <h5>CATEGORIES</h5>
            <Title level='h2' text="Popular Categories" />
        </div>

        <div className='conatinerCategoria' >
            {/* <CardCategories /> */}
            <CardCategoryV2 categoryA="AutoCadA" img={Autocad} />
            <CardCategoryV2 categoryA="TopografiaA" img={Topografia} />
        </div>
          

        <div class="main-btn">
          <button type="button" class="btn btn-primary">Más Categorias</button>
        </div>
    </div>
  )
}

export default Categorias