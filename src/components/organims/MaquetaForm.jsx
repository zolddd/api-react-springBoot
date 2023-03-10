import React from 'react'
import '../../assets/styles/MaquetaForm.css'
import WrapperInput from '../molecules/WrapperInput'
import Title from '../atoms/Title'
import Button from '../atoms/Button'

function MaquetaForm() {
  return (
    <div className='container2'>
        <Title level="h3" text="Solicita tu maqueta a profesionales" />

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Dimensiones y colores</span>

                    <div class="fields">
                        <div class="input-field">
                            <WrapperInput type="text" placeholder="Ancho" msn="Ancho" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Alto" msn="Alto" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Largo" msn="Largo" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Color 1" msn="Color 1" />
                        </div>


                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Color 2" msn="Color 2" />
                        </div>

                        <div class="input-field">
                            <label>Categoria</label>
                            <select required>
                                <option disabled selected>Select categoria</option>
                                <option>HERE CATEGORY</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">Materiales</span>

                    <div class="fields">
                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Material 1" msn="Material 1" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Material 2" msn="Material 2" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Otro materiales" msn="Otro materiales" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Descripcion" msn="Descripcion" />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="file" placeholder="Imagenes" msn="Imagenes  " />
                        </div>

                        <div class="input-field">
                        <WrapperInput type="text" placeholder="Nombre de la maqueta" msn="Nombre de la maqueta" />
                        </div>

                        <div className='btn-v23'>
                            <Button msn="Siguiente" />
                        </div>
                    </div>

                   <div className='buttonOpacity'>
                    <Button msn="Siguiente" />
                   </div>
                    
                
                </div> 
                
            </div>
        
        </form>
    </div>
  )
}

export default MaquetaForm