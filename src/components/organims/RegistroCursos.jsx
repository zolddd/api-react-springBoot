import React from 'react'
import Title from '../atoms/Title'
import WrapperInput from '../molecules/WrapperInput'
import '../../assets/styles/RegisterCursos.css'
import ImgAdd from '../../assets/icons/FotoAdd.svg'
import ImgVideo from '../../assets/icons/Video.svg'
import imgX from '../../assets/icons/Off.svg'



function RegstroCursos() {
  return (
    <div className='containerCursos'>
        
        <form className='container-cursos'>
        <img className='ImgX' src={imgX} alt="logo" />
        <div className='title-cursos'>
            <Title level='h1' text={"Añadir Cursos"}/>
        </div>
        <div className='inputs-cursos'>
        <WrapperInput type = "text" placeholder="Titulo" name="correo"/>
        <WrapperInput type="text" placeholder="Categoria"  name="contra"/>
        </div>

        <div className='inputs-cursos'>
            <div className='file'>
                <WrapperInput type="file" placeholder="Imagen" id="file2" name="correo"/>
                <p>Imagen</p>
                <img className='fileImg' src={ImgAdd} alt="img" />
            </div>
            <div className='file'>
                <WrapperInput type="file" placeholder="Video" id="file2" name="correo"/>
                <p>Videos</p>
                <img className='fileImg' src={ImgVideo} alt="img" />
            </div>
        
        </div>

        <div className='checkbox-v2'>
            <input className='asasa' type="checkbox" /><label htmlFor="">Nivle basico</label>
            <input type="checkbox" /><label htmlFor="">Nivel intermedio</label>
            <input type="checkbox" /><label htmlFor="">Nivel avanzado</label>
            {/* <WrapperInput type="checkbox" msn="Nivel Basico" />
            <WrapperInput type="checkbox" msn="Nivel Intermedio" />
            <WrapperInput type="checkbox" msn="Nivel Avazado" /> */}
        </div>

        <div className='textArea'>
            <textarea placeholder='Description'></textarea>
        </div>

        <div className='btn-cursos'>
            <button>Iniciar sesion</button>
        </div>
        </form>
  </div>
  )
}

export default RegstroCursos