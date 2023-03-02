import { Formik, Form } from "formik";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Title from '../atoms/Title'
import { Link } from 'react-router-dom'
import '../../assets/styles/Login.css'
import LogoImg from '../../assets/icons/LogoPrin.svg'
import WrapperInput from "../molecules/WrapperInput"
import { useRef } from 'react'

export default function FormLoginStudent() {
  return (
    <div className='container'>
    <Formik
      initialValues={{ mail: "", password: "" }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createStudent(values);
          console.log(values);
          actions.resetForm();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className='container-login'>
          <img src={LogoImg} alt="LOGO" />
          <Title className='title-login' title={"bienvenido"} />
          <Label msn={"Mail"} />
          <Input
            type={"text"}
            name={"mail"}
            onChange={handleChange}
            value={values.mail}
          />
          <Label msn={"Password"} />
          <Input
            type={"password"}
            name={"password"}
            onChange={handleChange}
            value={values.password}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving.." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}
