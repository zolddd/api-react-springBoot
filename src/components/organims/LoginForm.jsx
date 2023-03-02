import React from 'react'
import Title from '../atoms/Title'
import { Link, Navigate } from 'react-router-dom'
import '../../assets/styles/Login.css'
import LogoImg from '../../assets/icons/LogoPrin.svg'
import WrapperInput from "../molecules/WrapperInput"
import { useRef } from 'react'



function LoginForm() {

  const form = useRef();

  const HandlerClick = (e) =>{
    e.preventDefault;
    const newForm = new FormData(form.current);
    let nombre = newForm.get('correo');
    let contrasenia = newForm.get('contra');

    alert("Estamos imprimiendo algo " + nombre + " " + contrasenia)
  }

 

  return (

    <div className='container'>
      <form className='container-login' ref = {form}>
        <img src={LogoImg} alt="LOGO"/>
        <div className='title-login'>
          <Title level='h1' text={"Bienvenido"}/>
        </div>
        <div className='inputs-login'>

        <WrapperInput msn = "Correo electronico" type = "text" placeholder="Direccion de correo electronico" name="correo"/>
        <WrapperInput msn = "Contraseña" type="password" placeholder="Contraseña"  name="contra"/>
        </div>
        <div className='description-login'>
          <Link to="/">No tienes cuenta? <span>Registrate</span></Link>
        </div>
        <div className='btn-login'>
          <button onClick = {HandlerClick}>Iniciar sesion</button>
        </div>
        <div className='description-login'>
          <Link to="/">Se te olvido tu contraseña <span>Recuperar</span></Link>
        </div>
      </form>
    </div>
  )
}


export default LoginForm