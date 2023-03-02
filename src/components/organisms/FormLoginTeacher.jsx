import React from "react";
import "../../assets/styles/Login.css";
import { Link, Navigate } from "react-router-dom";
import LogoImg from "../../assets/icons/LogoPrin.svg";
import WrapperInput from "../molecules/WrapperInput";
import { Formik, Form } from "formik";
import Title from "../atoms/Title";

function FormLoginTeacher() {
    return (
    <>
    <div className="container">
<Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createStudent(values);
            //const isValid= await teacherSchema.isValid() 
            console.log(values);
            actions.resetForm(); 
          } catch (error) {
            console.log(error);
          }
        }}
        //validationSchema={teacherSchema}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="container-login">
              <img src={LogoImg} alt="LOGO"/>
              <div className="title-login"></div>
              <Title title="Bienvenido" level="h1"/>
            <WrapperInput   name="email"  type="text" onChange={handleChange} msn="Correo Electronico" placeholder="Dirección de correo electronico" />
            <WrapperInput name="password"  type="password" onChange={handleChange} msn="Contraseña: " placeholder="Contraseña" />
             <label htmlFor="">Pa que vea valeria</label>
            <input type="text" name="email" onChange={handleChange}/> 
            
            <div className="btn-login">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Iniciando Sesion.." : "Iniciar Sesion"}
            </button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </>
    );
}

export default FormLoginTeacher;