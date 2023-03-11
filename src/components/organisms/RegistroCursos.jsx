import React from 'react'
import Title from '../atoms/Title'
import WrapperInput from '../molecules/WrapperInput'
import '../../assets/styles/RegisterCursos.css'
import ImgAdd from '../../assets/icons/FotoAdd.svg'
import ImgVideo from '../../assets/icons/Video.svg'
import imgX from '../../assets/icons/Off.svg'
import { Link } from 'react-router-dom'
import { Formik,Form } from 'formik'
import { createCourse } from '../../api/course.api'
import { useNavigate } from 'react-router-dom'


function RegistroCursos() {
    const navigate = useNavigate();
  return (
    <>
    <div className='containerCursos'>
        <Formik
         initialValues={{title:"", category:"",image:"",level:"",description:"", video:""}}
         onSubmit={async(values, actions) => {
           try {
             const response = await createCourse(values);
             console.log(values);
             actions.resetForm();
             navigate("/home_teacher")
           } catch (error) {
             console.log(error);
           }
         }}
        >{({ handleChange, handleSubmit, isSubmitting }) => (
            <Form className="container-cursos">
            <Link to="/home_teacher"><img className='ImgX' src={imgX} alt="logo" /></Link>
        <div className='title-cursos'>
            <Title level='h1' title={"Añadir Cursos"}/>
        </div>
        <div className='inputs-cursos'>
        <WrapperInput name="title"  type="text" onChange={handleChange} placeholder="Titulo" />

        <select name="category" onChange={handleChange}>
            <option value="">Agregar Categoria</option>
            <option value="AutoCAD ">AutoCAD</option>
            <option value="Topografia ">Topografia</option>
            <option value="SketchUp">SketchUp</option>
        </select>
        </div>

        <div className='inputs-cursos'>
            <div className='file'>
                <WrapperInput name="image"  type="file" onChange={handleChange} placeholder="Imagen" />
                <p>Imagen</p>
                <img className='fileImg' src={ImgAdd} alt="img" />
            </div>
            <div className='file'>
                <WrapperInput name="video"  type="file" onChange={handleChange} placeholder="Video" /> 
                <p>Videos</p>
                <img className='fileImg' src={ImgVideo} alt="img" />
            </div>
        
        </div>

        <div className='inputs-cursosv2'>
            <select name="level" onChange={handleChange}>
                <option value="">Agregar Nivel</option>
                <option value="basico ">Basico</option>
                <option value="intermedio ">Intermedio</option>
                <option value="avanzado">Avanzado</option>
            </select>
        </div>

        <div className='textArea'>
            <textarea placeholder='Description' name='description' onChange={handleChange}></textarea>
        </div>

        <div className='btn-cursos'>
            <button type='submit'disabled={isSubmitting}>
            {isSubmitting ? "Iniciando Sesion.." : "Iniciar Sesion"}
            </button>
        </div>
            </Form>)}
        </Formik>
    
  </div>

    </>
  )
}

export default RegistroCursos