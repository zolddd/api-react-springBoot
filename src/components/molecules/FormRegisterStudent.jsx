import { Formik, Form } from "formik";
import { createStudent } from "../../api/student.api";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import WrapperInput from "./WrapperInput";

export default function FormRegisterStudent() {
  return (
    <div className="container">
      <Formik
        initialValues={{ name: "", lastName: "", password: "" }}
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
          <Form onSubmit={handleSubmit} className="container-login">

<WrapperInput   name="name"  type="text" onChange={handleChange} msn="Name: " placeholder="Ingrese el nombre" />
<WrapperInput   name="lastName"  type="text" onChange={handleChange} msn="Last Name: " placeholder="ingresa el Last Name" />
<WrapperInput   name="password"  type="password" onChange={handleChange} msn="Password: " placeholder="Write the password" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
