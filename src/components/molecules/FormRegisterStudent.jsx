import { Formik, Form } from "formik";
import { createStudent } from "../../api/student.api";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

/*import Title from "../atoms/Title";
import "../../assets/styles/Login.css"
import WrapperInput from "./WrapperInput";*/

import Login from "../../assets/styles/Login.css";
//import WrapperInput from "./WrapperInput";

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
            <div className="inputs-login">
              <WrapperInput
                msn="Name"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />

              <WrapperInput
                msn="Last name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
              />

              <WrapperInput
                msn="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
