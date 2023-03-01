import React from 'react'
import '../../assets/styles/CardCategorias.css'
import CardCategories from '../molecules/CardCategories';
import Title from '../atoms/Title';


function Categorias() {
  return (
    <div className='container-card2'>
        <div class="center-text">
            <h5>CATEGORIES</h5>
            <Title level='h2' text="Popular Categories" />
        </div>

        <div className='card-flex'>
            <CardCategories />
        </div>
          

        <div class="main-btn">
          <button type="button" class="btn btn-primary">Más Categorias</button>
        </div>
    </div>
  )
}

export default Categorias