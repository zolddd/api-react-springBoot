import React from 'react'
import '../../assets/styles/CardShopping.css'
import AutoCADW from '../../assets/icons/AutoCADwhile.svg'
import NivelM from '../../assets/icons/BasicaLevel.svg'


function CardShopping() {
  return (
    <div >
        <div class="row" >
                <div class="iconos" >
                    {/* <div className='Circulo'></div>
                    <div className='Cuadrado'></div>
                    <div className='Circulo2'></div>
                    <div className='Cuadrado2'></div> */}
                    <img src={AutoCADW} alt="logo" />
                    <h1>AutoCAD</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff29" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,154.7C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <div class="courses-text">
                    
                    <h3>Autodesk AutoCAD para Diseño, Interiorismo y Arquitectura</h3>
                    <div class="basi-container">
                        <img class="basico" src={NivelM} alt="" />
                        <h6>Basico</h6>
                    </div>
                    
                    <div class="rating">
                        <div class="star">
                            <a href="#"><i class='bx bxs-star'></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <div className='star-cantidad'>
                                <h4>5.0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CardShopping