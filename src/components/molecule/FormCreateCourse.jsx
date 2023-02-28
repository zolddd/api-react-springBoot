import { Formik, Form } from "formik";
import { createCourse } from "../../api/course.api";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

export default function FormCreateCourse() {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          category: "",
          image: "",
          level: "",
          description: "",
          video: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createCourse(values);
            console.log(values);
            actions.resetForm();
            navigate("/coursesStudent");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label msn={"Title"} />
            <Input
              type={"text"}
              name={"title"}
              onChange={handleChange}
              value={values.title}
            />

            <Label msn={"Category"} />
            <Input
              type={"text"}
              name={"category"}
              onChange={handleChange}
              value={values.category}
            />

            <Label msn={"Image"} />
            <Input
              type={"file"}
              name={"image"}
              onChange={handleChange}
              value={values.image}
            />

            <Label msn={"Level"} />
            <Input
              type={"text"}
              name={"level"}
              onChange={handleChange}
              value={values.level}
            />

            <Label msn={"Description"} />
            <Input
              type={"text"}
              name={"description"}
              onChange={handleChange}
              value={values.description}
            />

            <Label msn={"Video"} />
            <Input
              type={"file"}
              name={"video"}
              onChange={handleChange}
              value={values.video}
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success"
            >
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
