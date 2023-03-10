import React from 'react'
import Title from '../atoms/Title'
import WrapperInput from '../molecules/WrapperInput'
import '../../assets/styles/RegisterCursos.css'
import ImgAdd from '../../assets/icons/FotoAdd.svg'
import ImgVideo from '../../assets/icons/Video.svg'
import imgX from '../../assets/icons/Off.svg'
import { Link } from 'react-router-dom'



function RegstroCursos() {
  return (
    <div className='containerCursos'>
        
        <form className='container-cursos'>
        <Link to="/HomeCursos"><img className='ImgX' src={imgX} alt="logo" /></Link>
        <div className='title-cursos'>
            <Title level='h1' text={"Añadir Cursos"}/>
        </div>
        <div className='inputs-cursos'>
        <WrapperInput type = "text" placeholder="Titulo" name="correo"/>
            <select name="" id="">
                <option value="">Agregar Categoria</option>
                <option value="AutoCAD ">AutoCAD</option>
                <option value="Topografia ">Topografia</option>
                <option value="SketchUp">SketchUp</option>
            </select>
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

        <div className='inputs-cursosv2'>
            <select name="" id="">
                <option value="">Agregar Nivel</option>
                <option value="basico ">Basico</option>
                <option value="intermedio ">Intermedio</option>
                <option value="avanzado">Avanzado</option>
            </select>
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