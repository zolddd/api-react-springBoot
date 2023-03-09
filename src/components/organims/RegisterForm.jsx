import React from 'react'
import '../../assets/styles/Registro.css'
import WrapperInput from '../molecules/WrapperInput'

function RegisterForm() {
  return (
    <div className='container-registro'>
        <form className='form-registro'>
            <h3 className='register-title'>Registrate</h3>
            <div className='inputs-v1'>
                <WrapperInput msn = "Nombre"  type = "text" placeholder="Nombre" name="correo"/>
                <WrapperInput msn = "Apellido" type="password" placeholder="Apellido"  name="Apellido"/>
            </div>
            
            <WrapperInput msn = "Correo electronico" type = "text" placeholder="Direccion de correo electronico" name="correo"/>
            <WrapperInput msn = "Contraseña" type="password" placeholder="Contraseña"  name="contra"/>
            <WrapperInput msn = "Validar contraseña" type = "text" placeholder="Validar contraseña" name="contraseña"/>

            <div className='btn-registro'>
                <button>Registrarse</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm