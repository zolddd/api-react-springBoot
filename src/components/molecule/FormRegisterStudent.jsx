import { Formik, Form } from "formik";
import { createStudent } from "../../api/student.api";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function FormRegisterStudent() {
  return (
    <>
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
          <Form onSubmit={handleSubmit}>
            <Label msn={"Name"} />
            <Input
              type={"text"}
              name={"name"}
              onChange={handleChange}
              value={values.name}
            />
            <Label msn={"Last name"} />
            <Input
              type={"text"}
              name={"lastName"}
              onChange={handleChange}
              value={values.lastName}
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
  );
}
