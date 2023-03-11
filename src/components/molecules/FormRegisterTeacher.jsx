import React from "react";
import "../../assets/styles/Registro.css";
import { Link, useNavigate } from "react-router-dom";
/* import LogoImg from "../../assets/icons/LogoPrin.svg"; */
import WrapperInput from "../molecules/WrapperInput";
import { Formik, Form } from "formik";
import { createTeacher } from "../../api/Teacher.api";



function FormRegisterTeacher() {
  const navigate=useNavigate();
    return (
    <div className="container-registro">
<Formik
        initialValues={{name:"",lastName:"", mail: "", password: "" }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createTeacher(values); 
            console.log(values);
            actions.resetForm();
            navigate("/login-teacher")
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="form-registro">
             <h3 className="register-title">Registrate</h3>
             <div className='inputs-v1'>
             <WrapperInput   name="name"  type="text" onChange={handleChange} msn="Nombre" placeholder="Nombre" />
            <WrapperInput name="lastName"  type="text" onChange={handleChange} msn="Apellido" placeholder="Apellido" />   
             </div>
             <WrapperInput   name="mail"  type="text" onChange={handleChange} msn="Correo electronico" placeholder="Dirección de correo electronico" />
            <WrapperInput name="password"  type="password" onChange={handleChange} msn="Contraseña" placeholder="Contraseña" />   
            <WrapperInput name="password2"  type="password" onChange={handleChange} msn="Validar Contraseña" placeholder="Validar Contraseña" />   
            <div className="btn-registro">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrandose.." : "Registrarse"}
            </button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
  
    );
}

export default FormRegisterTeacher;