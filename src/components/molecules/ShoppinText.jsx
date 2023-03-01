import React from 'react'
import Title from '../atoms/Title'
import CardShopping from './CardShopping'

function ShoppinText() {
  return (
    <div>
        <div class="center-text">
            <h5>COURSES</h5>
            <Title level='h2' text="Explore Popular Courses" />
        </div>

        <div className='courses-content' >
            <CardShopping />
        </div>  

        <div className='curoses-btn'>
            <button type="button" class="btn btn-primary">Saber más</button>
        </div>
    </div>
  )
}

export default ShoppinText