import { Formik, Form } from "formik";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function FormLoginTeacher() {
  return (
    <>
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
        <Form onSubmit={handleSubmit}>
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
  </>
  )
}
